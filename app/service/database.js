'use strict';
const Service = require('egg').Service;

class toDoService extends Service {

  async getTodoList(selectDate) {
    // 根据id查询用户信息
    let sql = "select * from todolist order by time ";
    // return await this.app.mysql.get('article', { id: id });
    const resArr = await this.app.mysql.query(sql);
    let filterArr = [];
    resArr.forEach(element => {
      let dateStr = '';
      let year = element.time.getFullYear();
      var month = element.time.getMonth() + 1;
      month = month >= 10 ? month : '0' + month;
      var date = element.time.getDate();
      date = date >= 10 ? date : '0' + date;
      let hour = element.time.getHours();
      hour = hour >= 10 ? hour : '0' + hour;
      let minute = element.time.getMinutes();
      minute = minute >= 10 ? minute: '0'+minute;
      let second =element.time.getSeconds();
      second = second >=10 ? second:'0' + second;
      dateStr = year + "-" + month + "-" + date+" "+hour + ":" + minute + ":" + second;
      if (dateStr.slice(0,10) == selectDate.slice(0, 10)) {
        element.time = dateStr;
        filterArr.push(element);
        // filterArr.push(dateStr+" "+selectDate.slice(0, 10)+" "+element.time)
      }
    });
    // return selectDate;
    return filterArr;
  }
  async postTodoList(req_body) {
    return await this.app.mysql.insert('todolist', {
      content: req_body.content,
      type: req_body.type,
      time: req_body.time,
      status: req_body.status,
    });
  }
  async changeStatus(id,status){
    if(status == '0'){
      status = 1;
    }else if(status == '1'){
      status = 0;
    }
    return await this.app.mysql.update('todolist', {
      status:status
    }, {
        where: {
          id: id
        } //修改查询条件
      });
  }
  async getMostImportant(username){
    // console.log(username+"      "+"   45641321");
    let res = [];
    let i = 1;
    while(res.length == 0){
      let sql = 'select * from todolist where user="'+username+'" and type='+i+' and status=0 order by time';
      const resArr = await this.app.mysql.query(sql);
      let currentTime = new Date().getTime();
      console.log(currentTime);
      for(let j=0;j<resArr.length;j++){
        let item_time = resArr[j].time.getTime();
        if(item_time > currentTime){
          res.push(resArr[j]);
          break;
        }
      }
      i++;
    }
    // console.log(resArr);
    return res;
  }
}
module.exports = toDoService;