<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
     <a-menu-item key="mail" class='luyou'> <router-link to='/Home/ToDoList' tag='span'><a-icon type="mail" /> 日程</router-link> </a-menu-item>
     <a-menu-item key="app" class='luyou'>  <router-link to='/Home/Plan' tag='span'><a-icon type="appstore" />计划</router-link> </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
    };
  },
};
</script>
<style>
.luyou>span{
  display: inline-block;
  height:100%;
  
}
</style>
