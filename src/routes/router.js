import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeSearch from '@/components/Pages/HomeSearch.vue'
import ResultadoSearch from "@/components/Resultado/ResultadoSearch.vue"
import PaginaErro from "@/components/PaginaErro.vue"




const routes = [
  {
    path: "/",
    component: HomeSearch,
  },
  {
    path: '/resultado',
    component: ResultadoSearch
  },
  {
    path: '/404',
    component: PaginaErro,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  // base: process.env.BASE_URL,
});

export default router;
