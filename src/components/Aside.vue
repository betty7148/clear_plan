<template>
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar :fullscreen="false" @panelChange="onPanelChange" @select="onSelect"/>
  </div>
</template>
<script>
import Bus from '../event.js';
import moment from 'moment';
Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1, //month 
    "d+": this.getDate(), //day 
    "h+": this.getHours(), //hour 
    "m+": this.getMinutes(), //minute 
    "s+": this.getSeconds(), //second 
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
    "S": this.getMilliseconds() //millisecond 
  }
  if (/(y+)/.test(format)) {
     format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
     if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}
export default {
  methods: {
    //面板切换，如细度为月变成细度为年
    onPanelChange(value, mode) {
        alert(value+" "+mode);
        console.log(value, mode);
    },
     
    //选中某一日期
    onSelect(value){
      if(!value){
        value = new Date().format("yyyy-MM-dd hh:mm:ss");
      }else{
        value  = new Date(value)
        value =  value.format("yyyy-MM-dd hh:mm:ss");
      }
        // console.log(value);
        Bus.$emit('date',value);
        // alert(value);
    }
  },
  // created(){
  //   this.onSelect('');
  // }
};
</script>
