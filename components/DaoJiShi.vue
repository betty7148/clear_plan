<template>
<div>
 
  <a-result :title=this.importantThing>
    <template v-slot:icon>
      <a-icon type="smile" theme="twoTone" />
    </template>
    <template v-slot:extra>
     <router-link to='/Home'><a-button type="primary">返回</a-button></router-link> 
    </template>
  </a-result>
 
 

<!-- <div>{{juliTime}}</div> -->
    
</div>
    
</template>
<script>
export default {
    data(){
        return{
            planTime:'2020-07-06,00:00:00',
            day:0,
            hour:0,
            minute:0,
            second:0,
            juliTime:'',
            importantThing:'距离高考还有'+this.juliTime
        }
    },
    created(){
        this.computJuLiTime();
        setInterval(this.computJuLiTime,1000)
    },
    methods:{
        computJuLiTime(){
            let currentTime = new Date();
            let plan = new Date(this.planTime);
            let leftTime = parseInt((plan-currentTime)/1000);//多少秒
            this.day = parseInt(leftTime/(60*60*24));
            this.hour = parseInt(leftTime/(60*60)%24);
            this.minute = parseInt(leftTime/(60)%60);
            this.second = parseInt(leftTime%60);
            this.juliTime = Math.abs(this.day) + '天' +Math.abs(this.hour) + '小时' + Math.abs(this.minute) + '分' + Math.abs(this.second) + '秒';
            this.importantThing = '距离高考还有' + this.juliTime;
        }
    } 
}
</script>