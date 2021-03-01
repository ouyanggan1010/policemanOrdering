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

// -------------------全局引用格式化时间
import dayjs from "dayjs";
Vue.prototype.$dayjs = dayjs;

// -------------------按需引入组件
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Image as VanImage,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Form,
  Field,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Toast,
  CountDown,
  Popup,
  Uploader,
  ActionSheet,
  Icon,
  Dialog,
  Switch,
  Tab,
  Tabs,
  PullRefresh,
  List,
  Search,
  DropdownMenu,
  DropdownItem,
  Popover,
  SwipeCell,
  Badge,
  Picker,
  DatetimePicker,
} from "vant";
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(CountDown);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Switch);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Search);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Popover);
Vue.use(SwipeCell);
Vue.use(Badge);
Vue.use(Picker);
Vue.use(DatetimePicker);

Vue.prototype.$Toast = Toast;
Vue.prototype.$Dialog = Dialog;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
