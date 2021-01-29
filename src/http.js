// 引用axios
import axios from "axios";

axios.defaults.withCredentials = true;

const http = axios.create({
  // 后台请求接口的地址
  baseURL: process.env.VUE_APP_API_URL,
});
http.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
http.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);
// 输出htpp
export default http;