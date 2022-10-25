import Vue from "vue";
import App from "./App.vue";
import router from './routes/router'
import store from './store/store'
import PaginaCarregando from '@/components/PaginaCarregando.vue'

import './puglins/axios'
import '@/styles/global.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

Vue.component('PaginaCarregando', PaginaCarregando)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
