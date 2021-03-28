import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/cart",
    component: () => import("../views/cart")
  },
  {
    path: "/category",
    component: () => import("../views/category")
  },
  {
    path: "/home",
    component: () => import("../views/home")
  },
  {
    path: "/profile",
    component: () => import("../views/profile")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
