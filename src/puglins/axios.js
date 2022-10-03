import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com/users/'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
  }
})