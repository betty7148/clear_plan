<template>
  <div class="father">
    
    <a-row :gutter="[24,16]">
      <a-col :span="12">
        <!-- <span></span>
        <a-button shape="circle" icon="plus" class='flo_right'/>-->
        <a-card title="紧急且重要" :headStyle="{color:'red'}">
            <span slot="extra">
                <a-button shape="circle" icon="plus" class="flo_right" @click="showAdd(1)" />
            </span>
            <div class="add" v-show="show1">
                    <div><a-input placeholder="请输入任务内容" v-model="addContent"/></div>
                    <div>
                        <span>截止时间</span>
                        <a-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" >
                        </a-time-picker>
                    </div>
                    <hr style="border: 1px solid #eee;">
                    <div>
                        <a-button type="primary"   @click='addAPlan(1)'>创建</a-button>
                        <a-button type="danger"   @click='closeAdd(1)'>取消</a-button>
                    </div>
            </div>
            <a-timeline>
               <a-timeline-item
                color="red"
                v-for="item in noDoArr[0]"
                :key="item.id"
                >
              <span >
                {{item.content}}<span class='jianju'></span>{{item.time}}
                <span class="flo_right anniu green" @click='changeStatus("1red",item.id)'><a-icon type="smile" />&nbsp;已完成</span>
              </span>
            </a-timeline-item>
            <a-timeline-item color="green" v-for="item in hasDoneArr[0]" :key="item.id">
              <span >
                {{item.content}}<span class='jianju'></span>{{item.time}}
                <span class="flo_right anniu red" @click='changeStatus("1green",item.id)'><a-icon type="frown" />&nbsp;未完成</span>
                <!-- <span slot="extra"><a-button shape="circle" icon="chex" class='flo_right' onclick='addPlan(1)'/> </span> -->
              </span>
            </a-timeline-item>
          </a-timeline>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="重要但不紧急" :headStyle="{color:'orange'}">
          <span slot="extra">
                <a-button shape="circle" icon="plus" class="flo_right" @click="showAdd(2)" />
            </span>
          <div class="add" v-show="show2">
                    <div><a-input placeholder="请输入任务内容" /></div>
                    <div>
                        <span>截止时间</span>
                        <a-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" >
                        </a-time-picker>
                    </div>
                    <hr style="border: 1px solid #eee;">
                    <div>
                        <a-button type="primary"   @click='addAPlan(2)'>创建</a-button>
                        <a-button type="danger"  @click='closeAdd(2)'>取消</a-button>
                    </div>
            </div>
          <a-timeline>
               <a-timeline-item
              color="red"
              v-for="item in noDoArr[1]"
              :key="item.id"
             
            >
              <span>
                {{item.content}}<span class='jianju'></span>{{item.time}}
                <span class="flo_right anniu green"  @click='changeStatus("2red",item.id)'><a-icon type="smile" />&nbsp;已完成</span>
                <!-- <span slot="extra"><a-button shape="circle" icon="chex" class='flo_right' onclick='addPlan(1)'/> </span> -->
              </span>
            </a-timeline-item>
            <a-timeline-item color="green" v-for="item in hasDoneArr[1]" :key="item.id">
              <span >
                {{item.content}}<span class='jianju'></span>{{item.time}}
                <span class="flo_right anniu red" @click='changeStatus("2green",item.id)'><a-icon type="frown" />&nbsp;未完成</span>
                <!-- <span slot="extra"><a-button shape="circle" icon="chex" class='flo_right' onclick='addPlan(1)'/> </span> -->
              </span>
            </a-timeline-item>
           
          </a-timeline>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="[24,16]">
      <a-col :span="12">
        <a-card title="紧急但不重要" :headStyle="{color:'violet'}">
          <span slot="extra">
                <a-button shape="circle" icon="plus" class="flo_right" @click="showAdd(3)" />
            </span>
          <div class="add" v-show="show3">
                    <div><a-input placeholder="请输入任务内容" /></div>
                    <div>
                        <span>截止时间</span>
                        <a-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" >
                        </a-time-picker>
                    </div>
                    <hr style="border: 1px solid #eee;">
                    <div>
                        <a-button type="primary"   @click='addAPlan(3)'>创建</a-button>
                        <a-button type="danger"   @click='closeAdd(3)'>取消</a-button>
                    </div>
            </div>
          <a-timeline>
           
            <a-timeline-item
              color="red"
              v-for="item in noDoArr[2]"
              :key="item.id"
            >
              <span >
                {{item.content}}<span class='jianju'></span>{{item.time}}
                <span class="flo_right anniu green" @click='changeStatus("3red",item.id)'><a-icon type="smile" />&nbsp;已完成</span>
                <!-- <span slot="extra"><a-button shape="circle" icon="chex" class='flo_right' onclick='addPlan(1)'/> </span> -->
              </span>
            </a-timeline-item>
             <a-timeline-item
              color="green"
              v-for="item in hasDoneArr[2]"
              :key="item.id"
            >
              <span >
                {{item.content}}<span class='jianju'></span>{{item.time}}
                <span class="flo_right anniu red" @click='changeStatus("3green",item.id)'><a-icon type="frown" />&nbsp;未完成</span>
                <!-- <span slot="extra"><a-button shape="circle" icon="chex" class='flo_right' onclick='addPlan(1)'/> </span> -->
              </span>
            </a-timeline-item>
          </a-timeline>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="不紧急不重要" :headStyle="{color:'green'}">
          <span slot="extra">
                <a-button shape="circle" icon="plus" class="flo_right" @click="showAdd(4)" />
            </span>
          <div class="add" v-show="show4">
                    <div><a-input placeholder="请输入任务内容" /></div>
                    <div>
                        <span>截止时间</span>
                        <a-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" >
                        </a-time-picker>
                    </div>
                    <hr style="border: 1px solid #eee;">
                    <div>
                        <a-button type="primary"    @click='addAPlan(4)'>创建</a-button>
                        <a-button type="danger"   @click='closeAdd(4)'>取消</a-button>
                    </div>
            </div>
          <a-timeline>
               <a-timeline-item
              color="red"
              v-for="item in noDoArr[3]"
              :key="item.id"
            >
              <span >
                {{item.content}}<span class='jianju'></span>{{item.time}}
                <span class="flo_right anniu green" @click='changeStatus("4red",item.id)'><a-icon type="smile" />&nbsp;已完成</span>
                <!-- <span slot="extra"><a-button shape="circle" icon="chex" class='flo_right' onclick='addPlan(1)'/> </span> -->
              </span>
            </a-timeline-item>
            <a-timeline-item
              color="green"
              v-for="item in hasDoneArr[3]"
              :key="item.id"
            >
              <span >
                {{item.content}}<span class='jianju'></span>{{item.time}}
                <span class="flo_right anniu red" @click='changeStatus("4green",item.id)'><a-icon type="frown" />&nbsp;未完成</span>
                <!-- <span slot="extra"><a-button shape="circle" icon="chex" class='flo_right' onclick='addPlan(1)'/> </span> -->
              </span>
            </a-timeline-item>
           
          </a-timeline>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Bus from "../event.js";
import moment from 'moment';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default {
  name: "ToDoList",
  data() {
    return {
        show1:false,//addPlan的面板展示与否
        show2:false,
        show3:false,
        show4:false,
        addSelectTime: null,//创建任务时选择的截止时间
        addContent:'',//创建任务时填写的任务内容
        hasDoneArr: [
            //这里是已经完成的任务的列表，索引为0代表的是紧急且重要的任务数组
            [],[],[],[]
        ],
        noDoArr: [
            [],[],[],[]
        ],
        date: new Date().format("yyyy-MM-dd hh:mm:ss"),//展示的是日历中那一天的任务
        locale: zhCN,
        lastId:-1,
        user:window.localStorage.getItem('user')||''
        };
  },
  methods: {
    moment,
    //创建任务时选择的截止时间
    onChange(time, timeString) {
        // Bus.$on("date", content => {
        //   this.date = content;
        //   console.log("日期是：" + this.date);
        // });
        // console.log(this.date);
        this.addSelectTime=new Date(this.date.slice(0,4),this.date.slice(5,7)-1,this.date.slice(8,10),timeString.slice(0,2),timeString.slice(3,5),timeString.slice(7,9)) 
        // console.log(timeString);
    },
    //显示Add面板
    showAdd(type) {
      if (type == 1) {
        this.show1 = true;
      }else if(type == 2){
          this.show2 = true;
      }else if(type == 3){
          this.show3 = true;
      }else{
          this.show4 = true;
      }
    },
    //关闭Add面板
    closeAdd(type){
        if (type == 1) {
            this.show1 = false;
        }else if(type == 2){
            this.show2 = false;
        }else if(type == 3){
            this.show3 = false;
        }else{
            this.show4 = false;
        }
    },
    //将一个任务从已变成变成未完成  未完成变成已完成
    changeStatus(value, id) {
      const type = value[0];//1green
      const hasDone = value.length == 6 ? true : false;
      const status = hasDone?1:0;
      const arr = hasDone ? this.hasDoneArr : this.noDoArr;
      console.log(arr[type - 1]);
      console.log(id);
      let index = -1;
      const obj = {};
      for(let i = 0;i < arr[type-1].length;i++){
          if(arr[type-1][i].id == id){
              index = i;
              obj.id = arr[type-1][i].id;
              obj.content = arr[type-1][i].content;
              obj.time = arr[type-1][i].time;
              arr[type-1].splice(i,1);
          }
      }
      if(hasDone){
            this.noDoArr[type-1].push(obj);
      }else{
          this.hasDoneArr[type-1].push(obj)
      }
      this.$http.get("http://127.0.0.1:7001/changeStatus/"+id+"?status="+status+"&user="+this.user).then(res=>{
          const { data , status } = res;
          if(status == 200){
              const { content , code } = data;
              if(code == 200){
                  console.log( content );
              }
          }
      })
    },
    //创建一个新的任务
    addAPlan(type){
      //这里正常的逻辑是把任务加到数据库中，再从数据库中重新查数据。
      //但是这里做一个小优化，每次新增一个任务，直接加到this.noDoneArr中，省略从数据库中查数据的这一过程
      this.noDoArr[type-1].push({
        id : this.lastId + 1,
        content : this.addContent,
        time : this.addSelectTime.format("yyyy-MM-dd hh:mm:ss")
      })
      this.lastId = this.lastId + 1;
      this.$http.post('http://127.0.0.1:7001/postTodoList?'+"user="+this.user,{
          type : type,
          time : this.addSelectTime.format("yyyy-MM-dd hh:mm:ss"),
          content : this.addContent,
          status : 0,
      }).then(res=>{
            const { data , status } = res;
            if(status == 200){
                const { content , code } = data;
                if(code == 200){
                    console.log( content );
                }
            }
      })
    
      this.addSelectTime = null ;//创建任务时选择的截止时间
      this.addContent = '';
      this.show1 = false; this.show2 = false; this.show3 = false; this.show4 = false; 
    },
    getHasDone(){
      this.hasDoneArr = [ [],[],[],[] ];
      this.noDoArr = [[],[],[],[]];
      this.$http.get('http://127.0.0.1:7001/getTodoList?date='+this.date+"&user="+this.user).then(res=>{
          const { data , status } = res;
          if(status == 200){
              const { content , code } = data;
              if(code == 200){
                  content.forEach((item)=>{
                    console.log(item.time);
                      // item.time = item.time.slice(0,10)+" "+item.time.slice(11,-5);
                    
                      if(item.status == 0){
                          this.noDoArr[item.type-1].push(item);
                      }else{
                        this.hasDoneArr[item.type-1].push(item);
                      } 
                  })
                  //新增的任务的id肯定是所有的任务的最后一个id+1 所以保留lastId
                  this.lastId = content.length;
              }
          }
      })
    },
  },
  created() {
    //当前的日历选中的日期
    Bus.$on("date", content => {
      this.date = content;
      // if(this.addSelectTime){
      //   this.addSelectTime=new Date(this.date.slice(0,4),this.date.slice(5,7)-1,this.date.slice(8,10),this.time .slice(0,2),this.time .slice(3,5),this.time .slice(7,9)) 
      // }
      console.log("日期是：" + this.date);
      this.getHasDone();
    });
    this.getHasDone();
  }
};
</script>
 
<style>
.flo_right {
  float: right;
}
.ant-row {
  /* background-color: aliceblue; */
  height: 50%;
}
.ant-col {
  background-color: white;
  height: 100%;
  /* border:1px solid #ccc; */
}

.ant-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: rgb(248, 246, 246); */
}
.ant-card-head {
  /* min-height: 48px; */
  /* margin-bottom: -1px; */
  flex-basis: 48px;
}
.ant-card-head-wrapper {
  height: 48px;
}
.ant-card-body {
  /* height:100%; */
  flex-basis: auto;
  overflow: auto;
}
/* .ant-card-body::-webkit-scrollbar{
    color:#ecc;
    width:5px;
} */
::-webkit-scrollbar {
  width: 10px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);     */
  /* border-radius: 6px; */
  background: rgba(248, 244, 244, 0.8);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(212, 207, 207, 0.4);
  /* -webkit-box-shadow: inset 0 0 6px rgba(146, 141, 141, 0.5); */
}
/* ::-webkit-scrollbar-thumb:window-inactive {    background: rgba(255,0,0,0.4);} */
.ant-timeline-item-content > span {
  display: inline-block;
  width: 100%;
  
}
.ant-timeline-item-content span span {
  /* vertical-align: text-bottom; */
  display: inline-block;
}
.jianju{
    display: inline-block;
    width:30px;
}
.anniu{
    cursor: pointer;
    font-size: 12px;
    border:1px solid;
    border-radius:5px;
    padding:5px;
    
   
}
.red:hover{
    background-color: rgb(253, 209, 209);
}
.green:hover{
    background-color: rgba(0,128,0,0.2);
}
.red{
    color:red;
    border-color: red;
}
.green{
    color:green;
    border-color: green;
}
 
.add{
    width:100%;
    /* height:50px; */
    /* background-color: grey; */
    margin-bottom: 15px;
    border:1px solid #eee;
    box-shadow: 0px 0px 5px #ccc;
    /* display: none; */
}
 .animate{
    display:block;
    animation:slip 3s 1;
}
@keyframes slip{
    0%{
        opacity: 0;
        
    }
    100%{
         opacity: 1;
      
    }
}
.add >div{
    margin:10px;
}
.add > div >span{
    margin-right: 15px;
    color:12px;
}
.add>div>button{
    margin-right:15px;
}
</style>