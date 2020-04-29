<template>
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar :fullscreen="false" @panelChange="onPanelChange" @select="onSelect"/>
  </div>
</template>
<script>
export default {
  methods: {
    //面板切换，如细度为月变成细度为年
    onPanelChange(value, mode) {
        alert(value+" "+mode);
      console.log(value, mode);
    },
    //选中某一日期
    onSelect(value){
        alert(value);
    }
  },
};
</script>
