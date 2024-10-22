import axios from "axios";
const api =axios.create({
 baseURL:'https://reqres.in/api'
})
class Api{
 static getData(page){
  return  api.get(`/users?page=${page}`)

 }

 static createUser(data = {name: 'test'}){
  return api.post('/user/creat', data)
 }

 static updateUser(data = {name: 'test', id: 1}){
  return api.put('/user/update', data)
 }


}

export default Api