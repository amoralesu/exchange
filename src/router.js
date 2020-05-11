import Vue from "vue";
import Router from "vue-router";

//Las vistas de las tutas
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router); //Instalar o utilizar plugins a nuestro proyecto

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "*", //ruta default que no existe
      name: "error",
      component: Error,
    },
  ],
});
