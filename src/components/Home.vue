<template>
 
    <a-layout>
      <a-layout-header><Header></Header></a-layout-header>
      <a-layout>
        <a-layout-sider width='300px'><Aside></Aside></a-layout-sider>
        <a-layout-content>          
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//  import ToDoList from './components/ToDoList.vue'
import Aside from './Aside.vue';
import Header from './Header.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    // ToDoList,
    Aside,
    Header
  },
  data() {
    return {
      
    };
  },
}
</script>

<style>
 
.ant-layout{
  height: 100%;
}
.ant-layout-header{
  background-color: white;
  text-align: center;
}
aside.ant-layout-sider.ant-layout-sider-dark{
      flex: 0 0 200px;
    max-width: 300px;
    min-width: 300px;
    width: 300px;
  background-color: #2db7f5;
}
.ant-layout-content{
  flex:1 0 auto;
}
 
.ant-layout-content > div:nth-of-type(1){
  flex:1 0 auto;
  width:100%;
  height: 100%;
}
</style>
