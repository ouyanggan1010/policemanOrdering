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
  // --------------------------------农机购置补贴
  {
    path: "/serviceSubsidy",
    name: "ServiceSubsidy",
    component: () => import("../views/ServiceSubsidy.vue"),
    meta: {
      headShow: true,
      headTitle: "农机购置补贴",
    },
  },
  // --------------------------------农机购置补贴--补贴情况公告
  {
    path: "/serviceAnnouncement",
    name: "ServiceAnnouncement",
    component: () => import("../views/ServiceAnnouncement.vue"),
    meta: {
      headShow: true,
      headTitle: "补贴情况公告",
    },
  },
  // --------------------------------农机购置补贴--资金使用情况
  {
    path: "/serviceSituation",
    name: "ServiceSituation",
    component: () => import("../views/ServiceSituation.vue"),
    meta: {
      headShow: true,
      headTitle: "资金使用情况",
    },
  },
  // --------------------------------农机购置补贴--补贴产品查询
  {
    path: "/serviceSearch",
    name: "ServiceSearch",
    component: () => import("../views/ServiceSearch.vue"),
    meta: {
      headShow: true,
      headTitle: "补贴产品查询",
    },
  },
  // --------------------------------农机档案
  {
    path: "/serviceFile",
    name: "ServiceFile",
    component: () => import("../views/ServiceFile.vue"),
    meta: {
      headShow: true,
      headTitle: "农机档案",
    },
  },
  // --------------------------------农机驾驶证
  {
    path: "/serviceDriverLicense",
    name: "ServiceDriverLicense",
    component: () => import("../views/ServiceDriverLicense.vue"),
    meta: {
      headShow: true,
      headTitle: "农机驾驶证",
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
  // --------------------------------问题列表
  {
    path: "/qaList",
    name: "QaList",
    component: () => import("../views/QaList.vue"),
    meta: {
      QafootShow: true,
      headShow: true,
      headTitle: "问题列表",
    },
  },
  // --------------------------------提问详情
  {
    path: "/questionDetails",
    name: "QuestionDetails",
    component: () => import("../views/QuestionDetails.vue"),
    meta: {
      headShow: true,
      headTitle: "提问详情",
    },
  },
  // --------------------------------我要提问
  {
    path: "/qaAsking",
    name: "QaAsking",
    component: () => import("../views/QaAsking.vue"),
    meta: {
      QafootShow: true,
      headShow: true,
      headTitle: "我要提问",
    },
  },
  // --------------------------------我的问答
  {
    path: "/qaMyCnt",
    name: "QaMyCnt",
    component: () => import("../views/QaMyCnt.vue"),
    meta: {
      QafootShow: true,
      headShow: true,
      headTitle: "我的问答",
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
    props: (route) => ({
      pIdActive: route.query.pIdActive,
      cIdActive: route.query.cIdActive,
    }),
  },
  // --------------------------------资讯详情
  {
    path: "/newsDetails",
    name: "NewsDetails",
    component: () => import("../views/NewsDetails.vue"),
    meta: {
      headShow: true,
      headTitle: "资讯详情",
    },
  },
  // --------------------------------消息列表
  {
    path: "/messageList",
    name: "MessageList",
    component: () => import("../views/MessageList.vue"),
    meta: {
      headShow: true,
      headTitle: "消息",
    },
  }, 
  // --------------------------------消息详情
  {
    path: "/messageDetails",
    name: "MessageDetails",
    component: () => import("../views/MessageDetails.vue"),
    meta: {
      headShow: true,
      headTitle: "消息详情",
    },
  },
  // --------------------------------农户种植信息采集
  {
    path: "/fpCollectInformation",
    name: "FpCollectInformation",
    component: () => import("../views/FpCollectInformation.vue"),
    meta: {
      headShow: true,
      headTitle: "农户种植信息采集",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
