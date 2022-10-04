import Vue from "vue";
import VueRouter from "vue-router";
import HomeSearch from "@/components/Home/HomeSearch.vue";
import ResultadoSearch from "@/components/Resultado/ResultadoSearch.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeSearch,
  },
  {
    path: '/resultado',
    name: 'resultado',
    component: ResultadoSearch,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
