import React, {useState, useEffect} from 'react';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Card} from 'primereact/card';

import {Avatar} from 'primereact/avatar';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulating random data generation
    const randomData = [];
    for (let i = 1; i <= 5; i++) {
      randomData.push({
        id: i,
        name: `Student ${i}`,
        attendanceSeminars: Math.floor(Math.random() * 100) + '%',
        attendanceSupervision: Math.floor(Math.random() * 100) + '%',
        attendanceIntervision: Math.floor(Math.random() * 100) + '%',
        attendanceTIN: Math.floor(Math.random() * 100) + '%',
        groupSupervision: Math.floor(Math.random() * 100) + '%',
        tested: Math.random() > 0.5 ? 'Yes' : 'No',
        issueDate: '2024-10-15',
        issued: Math.random() > 0.5 ? 'Yes' : 'No'
      });
    }
    setStudents(randomData);
  }, []);

  return (
    <div className="container">
      <HeaderSection/>
      <CourseSection/>
      <SpeakersSection/>
      <AttendanceTable students={students}/>
      <CloseButton/>
    </div>
  );
};


// Header Section Component
const HeaderSection = () => (
  <div className="header-section">
    <span className='span'>обложка</span>
    <Card className="card">
      <div className="title-block">
        <Button label="Название" className='name'/>
      </div>
      <div className="title-block">


        <Button label="Тип курса"/>
        <Button label="Номер потока"/>
        <Button label="Тип проведения"/>
        <Button label="Товар"/>
      </div>
      <Button label="Начался" className="p-button-success"/>

    </Card>
  </div>
);

// Course Section Component
const CourseSection = () => (
  <div className="course-section">
    <Button label="Обзор"/>
    <Button label="Выдача документов" className="p-button-info"/>
    <Button label="Тестирование"/>
    <Button label="Мессенджер"/>
    <Button label="Успеваемость"/>
    <Button label="Участники и спикеры"/>
    <Button label="Информация"/>
    <Button label="Сертификаты" className="p-button-info"/>
    <Button label="Рекомендательные письма"/>
    <Button label="Дипломы"/>
    <Button label="Справки"/>
    <Button label="Регалии"/>
  </div>
);

// Speakers Section Component
const SpeakersSection = () => (
  <div className="speakers-section">
    <SpeakerItem id="123" name="Иван Петров" status="Наличие регалий" isRegaliaAttached={true}/>
    <SpeakerItem id="124" name="Ольга Кузнецова" status="Регалии прикреплены" isRegaliaAttached={true}/>
    <SpeakerItem id="125" name="Екатерина Смирнова" status="Нет регалий" isRegaliaAttached={false}/>
  </div>
);

// Speaker Item Component
const SpeakerItem = ({id, name, status, isRegaliaAttached}) => (
  <div className="speaker-item">
    <div className="avatar"></div>

    <div className="info">
      <span className='name_span'>{name}</span>

      <div className="btn">
        <span className='name_span'>ID: {id}</span>
        <Button label={status} className={isRegaliaAttached ? 'p-button-success' : 'p-button-danger'}/>
      </div>
    </div>
  </div>
);

// Attendance Table Component
const AttendanceTable = ({students}) => (
  <DataTable value={students} stripedRows tableStyle={{minWidth: '50rem'}}>
    <Column field="id" header="ID"/>
    <Column field="name" header="ФИО"/>
    <Column field="attendanceSeminars" header="Посещаемость семинаров"/>
    <Column field="attendanceSupervision" header="Посещаемость супервизий"/>
    <Column field="attendanceIntervision" header="Посещаемость интервизий"/>
    <Column field="attendanceTIN" header="Посещаемость тин"/>
    <Column field="groupSupervision" header="Посещаемость групповых супервизий"/>
    <Column field="tested" header="Пройдено тестирование"/>
    <Column field="issueDate" header="Дата выдачи"/>
    <Column field="issued" header="Выдан"/>
  </DataTable>
);

// Close Button Component
const CloseButton = () => (
  <div className="close">
    <Button label="Закрыть" className=" close-btn"/>
  </div>
);


export default App;
