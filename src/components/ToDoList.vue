<template>
     
  <div>
    <a-row :gutter="[24,16]">
        <a-col :span="12">
            <!-- <span></span>
            <a-button shape="circle" icon="plus" class='flo_right'/> -->
            <a-card title="紧急且重要"  headStyle='color:red'>
                <span  slot="extra"><a-button shape="circle" icon="plus" class='flo_right' onclick='addPlan(1)'/> </span>
                <a-timeline>
                    <a-timeline-item color="green"  v-for="item in hasDoneArr[0]" :key='item.id' @hover='changeStatus(green)'>
                         {{item.content}} </a-timeline-item>
                    <a-timeline-item color="red" v-for="item in noDoArr[0]" :key='item.id' @hover='changeStatus(red)'>
                     {{item.content}} 
                    </a-timeline-item>
                </a-timeline>
            </a-card>
        </a-col>
        <a-col :span="12">
             <a-card title="重要但不紧急"  headStyle='color:orange'>
                <a href="#" slot="extra"><a-button shape="circle" icon="plus" class='flo_right'/></a>
                 <a-timeline>
                    <a-timeline-item color="green"  v-for="item in hasDoneArr[1]" :key='item.id' @hover='changeStatus(green)'>
                         {{item.content}} </a-timeline-item>
                    <a-timeline-item color="red" v-for="item in noDoArr[1]" :key='item.id' @hover='changeStatus(red)'>
                     {{item.content}} 
                    </a-timeline-item>
                </a-timeline>
            </a-card>
        </a-col>
    </a-row>
    <a-row :gutter="[24,16]">
        <a-col :span="12">
            <a-card title="紧急但不重要"  headStyle='color:pink'>
                <a href="#" slot="extra"><a-button shape="circle" icon="plus" class='flo_right'/></a>
                <a-timeline>
                    <a-timeline-item color="green"  v-for="item in hasDoneArr[2]" :key='item.id' @hover='changeStatus(green)'>
                         {{item.content}} </a-timeline-item>
                    <a-timeline-item color="red" v-for="item in noDoArr[2]" :key='item.id' @hover='changeStatus(red)'>
                     {{item.content}} 
                    </a-timeline-item>
                </a-timeline>
            </a-card>
        </a-col>
        <a-col :span="12">
            <a-card title="不紧急不重要" headStyle='color:green' >
                <a href="#" slot="extra"><a-button shape="circle" icon="plus" class='flo_right'/></a>
                <a-timeline>
                    <a-timeline-item color="green"  v-for="item in hasDoneArr[3]" :key='item.id' @hover='changeStatus(green)'>
                         {{item.content}} </a-timeline-item>
                    <a-timeline-item color="red" v-for="item in noDoArr[3]" :key='item.id' @hover='changeStatus(red)'>
                     {{item.content}} 
                    </a-timeline-item>
                </a-timeline>
            </a-card></a-col>
    </a-row>
  </div>
  
</template>

<script>

export default {
    name:'ToDoList',
    data(){
        return {
            hasDoneArr:[
                [{'id':1,'content':'111',time:'2019-04-20'},
                {'id':2,'content':'111'},
                {'id':3,'content':'111'},],
                 [{'id':1,'content':'111'},
                {'id':2,'content':'111'},
                {'id':3,'content':'111'},],
                 [{'id':1,'content':'111'},
                {'id':2,'content':'111'},
                {'id':3,'content':'111'},],
                 [{'id':1,'content':'111'},
                {'id':2,'content':'111'},
                {'id':3,'content':'111'},]
            ],
            noDoArr:[
                [{'id':4,'content':'1121'},
                {'id':5,'content':'1121'},
                {'id':6,'content':'1121'}],
                [{'id':4,'content':'1121'},
                {'id':5,'content':'1121'},
                {'id':6,'content':'1121'}],
                [{'id':4,'content':'1121'},
                {'id':5,'content':'1121'},
                {'id':6,'content':'1121'}],
                [{'id':4,'content':'1121'},
                {'id':5,'content':'1121'},
                {'id':6,'content':'1121'}]
            ]
        };
    },
    methods:{
        addPlan(type){
            if(type==1){
                alert('1');
            }
        },
        changeState(value){
            alert(value)
        }
    }
    
}
</script>
 
<style>

.flo_right{
    float:right;
}
.ant-row{
    /* background-color: aliceblue; */
    height:50%;
}
.ant-col{
    background-color: white;
    height: 100%;
    /* border:1px solid #ccc; */
}
 
.ant-card {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.ant-card-head {
    /* min-height: 48px; */
    /* margin-bottom: -1px; */
    flex-basis: 48px;
}
.ant-card-head-wrapper{
    height:48px;
}
.ant-card-body{
    /* height:100%; */
     flex-basis: auto;
    overflow: auto;
}
/* .ant-card-body::-webkit-scrollbar{
    color:#ecc;
    width:5px;
} */
::-webkit-scrollbar {    width: 10px;}
/* 滚动槽 */
::-webkit-scrollbar-track {    
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);     */
    /* border-radius: 6px; */
     background: rgba(248, 244, 244, 0.8);    
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {    
    border-radius: 6px;    
    background: rgba(212, 207, 207,0.4);    
    /* -webkit-box-shadow: inset 0 0 6px rgba(146, 141, 141, 0.5); */
}
/* ::-webkit-scrollbar-thumb:window-inactive {    background: rgba(255,0,0,0.4);} */
</style>