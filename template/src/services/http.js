import axios from "axios";
import store from "../store";

// 创建axios实例
const http = axios.create({
  baseURL: "yourBaseURL", // baseURL
  timeout: 1000 * 10 // 10S
});

// request拦截器,在请求之前做一些处理
http.interceptors.request.use(
  config => {
    // 请求头拼TOKEN
    if (store.state.token) {
      config.headers["laohu-token"] = store.state.token;
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器,数据返回后进行一些处理
http.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.code == 200) {
      return res;
    } else if (res.code == "666") {
      console.log("其他再进行针对处理");
    } else {
      Promise.reject(res.msg);
    }
  },
  error => {
    Promise.reject("网络异常");
  }
);
export default http;
