import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "App",
    redirect: "/home"
  },
  // 首页
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      footShow: true,
      headShow: true,
      headTitle: "现代农业服务平台"
    },
  },
  // 服务
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Service.vue"),
    meta: {
      footShow: true,
      headShow: true,
      headTitle: "服务"
    },
  },
  // 问答
  {
    path: "/qa",
    name: "Qa",
    component: () => import("../views/Qa.vue"),
    meta: {
      footShow: true,
      headShow: true,
      headTitle: "问答"
    },
  },
  // 我的
  {
    path: "/my",
    name: "My",
    component: () => import("../views/My.vue"),
    meta: {
      footShow: true,
      headShow: true,
      headTitle: "我的"
    },
  },
  // 登录
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      headShow: true,
      headTitle: "登录"
    },
  },
  // 注册
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      headShow: true,
      headTitle: "注册"
    },
  },
  // 找回密码
  {
    path: "/retrievePassword",
    name: "RetrievePassword",
    component: () => import("../views/RetrievePassword.vue"),
    meta: {
      headShow: true,
      headTitle: "找回密码"
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
