<template>

  <div>
    <a-menu v-model="current" mode="horizontal">
     <a-menu-item key="mail" class='luyou'> <router-link to='/Home/ToDoList' tag='span'><a-icon type="mail" /> 日程</router-link> </a-menu-item>
     <a-menu-item key="app" class='luyou'>  <router-link to='/Home/Plan' tag='span'><a-icon type="appstore" />计划</router-link> </a-menu-item>
    
    
    </a-menu>
    <a-button type="primary" class='abs_right1'>
      <router-link to='/login'>登陆</router-link>
    </a-button>
    <a-button class='abs_right2'>注册</a-button>
     <!-- <a href='/login'>登陆</a>
     <a href='/regist'>注册</a> -->
    
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
.abs_right1{
  height: 34px;
  position: absolute;
  right: 100px;
  top: 15px;
}
.abs_right2{
  height: 34px;
  position: absolute;
  right: 20px;
  top: 15px;
}

</style>
