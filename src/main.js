import Vue from "vue";
import App from "./App.vue";
import router from './routes/router'
import store from './store/store'
import PaginaCarregando from '@/components/PaginaCarregando.vue'

import './puglins/axios'
import '@/styles/global.css'

Vue.config.productionTip = false;

Vue.component('PaginaCarregando', PaginaCarregando)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
