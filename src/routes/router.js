import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeSearch from '@/components/Pages/HomeSearch.vue'
import ResultadoSearch from "@/components/Resultado/ResultadoSearch.vue"

// TEMPORARIO
import HeaderResultado from "@/components/Resultado/BarraResultado.vue"
import CorpoResultado from '@/components/Resultado/CorpoResultado.vue'

const routes = [
  {
    path: "/",
    component: HomeSearch,
  },
  {
    path: '/resultado',
    component: ResultadoSearch,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  // base: process.env.BASE_URL,
});

export default router;
