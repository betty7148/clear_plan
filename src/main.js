import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { Menu } from 'ant-design-vue';
import { Button } from 'ant-design-vue';
import { List } from 'ant-design-vue';
import { Card } from 'ant-design-vue';
import { Icon } from 'ant-design-vue';
import { Col } from 'ant-design-vue';
import { Row } from 'ant-design-vue';
import { Layout } from 'ant-design-vue';
import { Timeline } from 'ant-design-vue';
import { Result } from 'ant-design-vue';
// import "ant-design-vue/dist/antd.css";

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
 
Vue.config.productionTip = false;

Vue.use(Menu);
Vue.use(VueRouter);

import router from './router.js'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
