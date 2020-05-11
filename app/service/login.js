'use strict';
const Service = require('egg').Service;

class loginService extends Service {

  async auth(req_body) {
      let { username,password } = req_body;
    // 根据id查询用户信息
      let res ={};
    // return await this.app.mysql.get('article', { id: id });
    const resArr = await this.app.mysql.get('user',{username:username});
    if(!resArr){
        //用户名不存在
        res.message = '用户名不存在';
        res.resArr = [];
    }else{
        // return resArr[0]
        //密码不正确
        if(password !== resArr['password']){
            res.message = '密码不正确';
            res.resArr = resArr;
        }else{
            res.message = '登陆成功！';
            res.resArr = resArr;
        }
    }
    // return selectDate;
    return res;
  }
  
}
module.exports = loginService;