import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
 
import { Menu, message } from 'ant-design-vue';
import { Button } from 'ant-design-vue';
import { List } from 'ant-design-vue';
import { Card } from 'ant-design-vue';
import { Icon } from 'ant-design-vue';
import { Col } from 'ant-design-vue';
import { Row } from 'ant-design-vue';
import { Layout } from 'ant-design-vue';
import { Timeline } from 'ant-design-vue';
import { Result } from 'ant-design-vue';
import { Calendar } from 'ant-design-vue';
import { Carousel } from 'ant-design-vue';
import { Form } from 'ant-design-vue';
import { FormModel } from 'ant-design-vue';
import { Input } from 'ant-design-vue';
import { Message } from 'ant-design-vue';
// import "ant-design-vue/dist/antd.css";
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.component(Button.name,Button);
Vue.component(Layout.name,Layout);
Vue.component(Layout.Sider.name,Layout.Sider);
Vue.component(Layout.Header.name,Layout.Header);
Vue.component(Layout.Content.name,Layout.Content);
Vue.component(Icon.name,Icon);
Vue.component(Menu.name,Menu);
Vue.component(Timeline.name,Timeline);
Vue.component(Timeline.Item.name,Timeline.Item);
Vue.component(Result.name,Result);
// Vue.component(Menu.SubMenu.name,Menu.SubMenu);
// Vue.component(Menu.MenuItem.name,Menu.MenuItem);
Vue.component(List.name,List);
Vue.component(List.Item.name,List.Item);
Vue.component(Col.name,Col);
Vue.component(Row.name,Row);
Vue.component(Card.name,Card);
Vue.component(Calendar.name,Calendar);
Vue.component(Carousel.name,Carousel);
Vue.component(Form.name,Form);
Vue.component(Form.name,Form);
Vue.component(Form.Item.name,Form.Item);
Vue.component(Input.name,Input);
// Vue.component(Message.name,Message);

Vue.config.productionTip = false;

Vue.use(Menu);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
 
import router from './router.js'
import http from './http.js'
// Vue.prototype.$http = http;
Vue.prototype.$message = message;

message.config({
  duration: 1,// 持续时间
  top:'300px', // 到页面顶部距离
  maxCount: 3 // 最大显示数, 超过限制时，最早的消息会被自动关闭
})


 
router.beforeEach((to, from, next) => {
  // if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (localStorage.getItem('auth')) {  // 获取当前的token是否存在
      console.log("token存在");
      next();
    } else {
      console.log("token不存在");
      next({
        path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      })
    }
  // }else { // 如果不需要权限校验，直接进入路由界面
  //   next();
  // }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

