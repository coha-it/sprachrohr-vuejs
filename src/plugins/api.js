import axios from 'axios'
const API_URL = 'http://127.0.0.1:3000'

export class API {
  // URL
  url (string) {
    return API_URL + string
  }

  getTodos () {
    const url = this.url('/api/todos/')
    return axios.get(url).then(response => response.data)
  }

  getTodo (pk) {
    const url = this.url('/api/todos/' + pk)
    return axios.get(url).then(response => response.data)
  }

  deleteTodo (todo) {
    const url = this.url('/api/todos/' + todo._id)
    return axios.delete(url)
  }

  createTodo (todo) {
    const url = this.url('/api/todos/create/')
    return axios.post(url, todo)
  }

  updateTodo (todo) {
    const url = this.url('/api/todos/' + todo._id)
    return axios.put(url, todo)
  }
}
