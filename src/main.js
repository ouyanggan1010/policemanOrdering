import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// -------------------引用字体图标文件
import "./assets/iconfont/iconfont.css";

// -------------------引用样式文件
import "./assets/scss/style.scss";

// -------------------将px转化为rem
import "amfe-flexible";

// -------------------引用请求文件
import http from "./http.js";
Vue.prototype.$http = http;

// -------------------全局引用vue混合器
import mixin from "./mixin";
Vue.mixin(mixin);

// -------------------按需引入组件
import {Tabbar, TabbarItem,NavBar,Image as VanImage,Swipe, SwipeItem,Lazyload,Grid, GridItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
