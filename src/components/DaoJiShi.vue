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
            thing:'',
            // importantThing:''
        }
    },
    created(){
        this.computJuLiTime();
        setInterval(this.computJuLiTime,1000);
        // let token = window.localStorage.getItem('auth');
        // Vue.http.headers.common['token'] = window.localStorage.getItem('auth');
 
        this.$http.get('http://127.0.0.1:7001/getMostImportant',{
          // headers:{
          //   token:window.localStorage.getItem('auth'),
          //   user:window.localStorage.getItem('user')
          // }
        }).then((res)=>{
          const { data , status } = res;
          if(status == 200){
            const { content , code } = data;
            console.log(data);
            if(code == 200){
              this.thing =  '距离' + content + '还剩';
              console.log(this.thing);
            }else if(code == 1001 ){
               this.$message.error('身份认证过期');
              //  this.$router.push({path:'/login'})
            }else if(code == 1002 ){
               this.$message.error('身份信息不正确，请重新登陆！');
            }
          }
          
        })
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
            // this.importantThing = '距离高考还有' + this.juliTime;
        }
    } ,
    computed:{
      importantThing:function(){
        return this.thing + this.juliTime;
      }
    }
}
</script>