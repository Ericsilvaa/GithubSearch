import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://api.github.com/users/'

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/users/'
})
axiosInstance.get()

export const api = {
  get(endpoint)  {
    return axiosInstance.get(endpoint)
  }
}


// Vue.use({
//   install(Vue) {
//     Vue.prototype.$http = axios
//   }
// })