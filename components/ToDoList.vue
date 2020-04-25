<template>
     
  <div>
    <a-row :gutter="[24,16]">
        <a-col :span="12">
            <!-- <span></span>
            <a-button shape="circle" icon="plus" class='flo_right'/> -->
            <a-card title="紧急且重要"  headStyle='color:red'>
                <a href="#" slot="extra"><a-button shape="circle" icon="plus" class='flo_right'/></a>
                <a-timeline>
                    <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
                    <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
                    <a-timeline-item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                    </a-timeline-item>
                    <a-timeline-item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                    </a-timeline-item>
                    <a-timeline-item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                    </a-timeline-item>
                    <a-timeline-item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                    </a-timeline-item>
                </a-timeline>
            </a-card>
        </a-col>
        <a-col :span="12">
             <a-card title="重要但不紧急"  headStyle='color:orange'>
                <a href="#" slot="extra"><a-button shape="circle" icon="plus" class='flo_right'/></a>
                <!-- <div class='wrapper'> -->
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                <!-- </div> -->
                
            </a-card>
        </a-col>
    </a-row>
    <a-row :gutter="[24,16]">
        <a-col :span="12">
            <a-card title="紧急但不重要"  headStyle='color:pink'>
                <a href="#" slot="extra"><a-button shape="circle" icon="plus" class='flo_right'/></a>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>

                <p>card content</p>
                <p>card content</p>
                <p>card content</p><p>card content</p>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </a-card>
        </a-col>
        <a-col :span="12">
            <a-card title="不紧急不重要" headStyle='color:green' >
                <a href="#" slot="extra"><a-button shape="circle" icon="plus" class='flo_right'/></a>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </a-card></a-col>
    </a-row>
  </div>
  
</template>

<script>

export default {
    name:'ToDoList',
    data(){
        return {
            
        };
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