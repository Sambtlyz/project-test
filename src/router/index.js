import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue"

// import Test from "@/views/test.vue"
// import Header from "../components/Header.vue"
// import Menu from "../components/Menu.vue"

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
          name: "home",
          component: Home,
  },
      {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
