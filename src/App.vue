<template>
  <div id="app">
    <router-view></router-view>
    <!-- <a-layout>
      <a-layout-header><Header></Header></a-layout-header>
      <a-layout>
        <a-layout-sider><aside></aside></a-layout-sider>
        <a-layout-content>          
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ToDoList></ToDoList> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//  import ToDoList from './components/ToDoList.vue'
// import Header from './components/Header.vue'
    
export default {
  name: 'App',
  components: {
    // HelloWorld
    // ToDoList,
    // Header
  },
  data() {
    return {
      
    };
  },
}
</script>

<style>
#app {
  height: 100%;
}
.ant-layout{
  height: 100%;
}
.ant-layout-header{
  background-color: white;
  text-align: center;
}.ant-layout-sider{
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
