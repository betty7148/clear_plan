
import axios from 'axios';
import router from './router';
 
// axios 配置
axios.defaults.timeout = 8000;
axios.defaults.baseURL = 'https://api.github.com';
 
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('auth')) { //判断token是否存在
      config.headers.token = localStorage.getItem('auth');  //将token设置成请求头
      config.headers.user = localStorage.getItem('user'); 
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
 
// http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log("111");
    // console.log(response);
    let { data } = response;
    let { content,code } = data;
    if (code === 1001) {
      router.replace('/login');
      console.log("token过期");
      // this.$message.error(content);
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
