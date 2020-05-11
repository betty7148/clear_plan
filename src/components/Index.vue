<template>
    <div>
        <header>1111</header>
        <main>
            <a-carousel arrows>
                <div
                slot="prevArrow"
                slot-scope="props"
                class="custom-slick-arrow"
                style="left: 10px;zIndex: 1"
                >
                <a-icon type="left-circle" />
                </div>
                <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
                <a-icon type="right-circle" />
                </div>
                <div  >
                    <h3>日程安排</h3>
                    <span>工作任务分轻重缓急逐一击破，从此告别杂乱无序;</span>
                    <p>开启井井有条的工作模式，帮助你更好的提高工作效率。</p>
                    <router-link :to="this.token ?'/Login':'/Home/ToDolist'"><div class='button'>去开启</div></router-link>
                    <img src='../assets/todolist.jpg' class="flo_right">
                </div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </a-carousel>
        </main>
        <footer>dibu</footer>
    </div>
 
</template>
<script>
export default {
  data(){
    return{
      token:window.localStorage.getItem('token')||'',
    }
  },

};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  /* text-align: center; */
  height: 360px;
  padding: 20px 100px 20px 100px;
  /* line-height: 160px; */
  /* background: #364d79; */
  overflow: hidden;
  position: relative;
  color:  blueviolet;
  font-size:20px;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 55px;
  height: 55px;
  font-size: 55px;
  border-radius: 55px;
  color: #fff;
  background-color: rgba(82, 121, 165, 0.81);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 1;
}

.ant-carousel >>> .slick-slide h3 {
  /* color: #fff; */
  color: violet;
  font-size: 30px;

}
.ant-carousel >>> .slick-slide img {
  /* color: #fff; */
  width: 500px;
  position: absolute;
  top: 0px;
  right: 100px;
  /* height: 100%; */
}
.ant-carousel >>> .slick-slide .button{
    /* height: 0px; */
    opacity: 0;
    width: 80px;
    height:50px;
    transition: all 1s 0s linear;
    position: relative;
    left: -300px;
    top:50px;
    border-radius: 10px;
    text-align: center;
    line-height:50px;
    background-color: rgb(79, 220, 245);
    cursor: pointer;
}
.ant-carousel >>> .slick-current .button{
    opacity: 1;
    left:0px;
}
header{
    height:100px;
    width:100%;
    position: fixed;
    top:0px;
}
main{
    /* position: absolute; */
    /* top:100px;
    bottom:100px; */
    width:100%;
    margin-top:100px;
}
footer{
    height:100px;
    
}
</style>