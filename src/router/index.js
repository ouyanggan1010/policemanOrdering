import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 解决报错
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "App",
    redirect: "/home",
  },
  // --------------------------------首页
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      footShow: true,
      headShow: true,
      headTitle: "现代农业服务平台",
    },
  },
  // --------------------------------服务
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Service.vue"),
    meta: {
      footShow: true,
      headShow: true,
      headTitle: "服务",
    },
  },
  // --------------------------------问答
  {
    path: "/qa",
    name: "Qa",
    component: () => import("../views/Qa.vue"),
    meta: {
      footShow: true,
      headShow: true,
      headTitle: "问答",
    },
  },
  // --------------------------------我的
  {
    path: "/my",
    name: "My",
    component: () => import("../views/My.vue"),
    meta: {
      footShow: true,
      headShow: true,
      headTitle: "我的",
    },
  },
  // --------------------------------登录
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      headShow: true,
      headTitle: "登录",
    },
  },
  // --------------------------------注册
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      headShow: true,
      headTitle: "注册",
    },
  },
  // --------------------------------注册协议
  {
    path: "/registerPact",
    name: "RegisterPact",
    component: () => import("../views/RegisterPact.vue"),
    meta: {
      headShow: true,
      headTitle: "注册协议",
    },
  },
  // --------------------------------找回密码
  {
    path: "/retrievePasswordOne",
    name: "RetrievePasswordOne",
    component: () => import("../views/RetrievePasswordOne.vue"),
    meta: {
      headShow: true,
      headTitle: "找回密码",
    },
  },
  {
    path: "/retrievePasswordTwo",
    name: "RetrievePasswordTwo",
    component: () => import("../views/RetrievePasswordTwo.vue"),
    meta: {
      headShow: true,
      headTitle: "找回密码",
    },
  },
  // --------------------------------实名认证
  {
    path: "/verifiedOne",
    name: "VerifiedOne",
    component: () => import("../views/VerifiedOne.vue"),
    meta: {
      headShow: true,
      headTitle: "实名认证",
    },
  },
  {
    path: "/verifiedTwo",
    name: "VerifiedTwo",
    component: () => import("../views/VerifiedTwo.vue"),
    props: (route) => ({
      trueName: route.query.trueName,
      idNumber: route.query.idNumber,
    }),
    meta: {
      headShow: true,
      headTitle: "实名认证",
    },
  },
  // --------------------------------认证通过
  {
    path: "/verifiedPass",
    name: "VerifiedPass",
    component: () => import("../views/VerifiedPass.vue"),
    meta: {
      headShow: true,
      headTitle: "实名认证结果",
    },
  },
  // --------------------------------认证失败
  {
    path: "/verifiedFail",
    name: "VerifiedFail",
    component: () => import("../views/VerifiedFail.vue"),
    meta: {
      headShow: true,
      headTitle: "实名认证结果",
    },
  },
  // --------------------------------个人资料
  {
    path: "/personalInformation",
    name: "PersonalInformation",
    component: () => import("../views/PersonalInformation.vue"),
    meta: {
      headShow: true,
      headTitle: "个人资料",
    },
  },
  // --------------------------------系统设置
  {
    path: "/systemSettings",
    name: "SystemSettings",
    component: () => import("../views/SystemSettings.vue"),
    meta: {
      headShow: true,
      headTitle: "系统设置",
    },
  },
  // --------------------------------修改密码
  {
    path: "/changePassword",
    name: "ChangePassword",
    component: () => import("../views/ChangePassword.vue"),
    meta: {
      headShow: true,
      headTitle: "修改密码",
    },
  },
  // --------------------------------资讯
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
    meta: {
      headShow: true,
      headTitle: "资讯",
    },
  },
  // --------------------------------资讯列表
  {
    path: "/newsList",
    name: "NewsList",
    component: () => import("../views/NewsList.vue"),
    meta: {
      headShow: true,
      headTitle: "资讯",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
