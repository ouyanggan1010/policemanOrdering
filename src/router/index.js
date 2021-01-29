import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "App",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      footShow: true,
    },
  },
  {
    path: "/preOrder",
    name: "PreOrder",
    component: () => import("../views/PreOrder.vue"),
    meta: {
      footShow: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      headShow: true,
      headTitle: "登录"
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
