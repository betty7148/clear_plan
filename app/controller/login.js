'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  
  async login(){
    const { ctx } = this;
    let res = {};
    let req_body = this.ctx.request.body;
    res.content = await this.ctx.service.login.auth(req_body);
    res.code = 200;
    console.log(res.content);
    let { message,resArr } = res.content;
    if(message == '登陆成功！'){
      console.log(resArr);
      let token = await this.generateToken({
        user:resArr.username
      });
      res.authorization = token;//设置headers
    }
    ctx.body = res;
  }
 
  async generateToken(data){
    console.log(data);
    const { ctx,app } = this;
    // let created = Math.floor(Date.now() / 1000);
    // let cert = fs.readFileSync(path.join(__dirname, '../public/rsa_private_key.pem'));//私钥
    let token = app.jwt.sign(data, app.config.jwt.secret, { expiresIn: '1h' });
    console.log("token:    "+token);
    return token;
}
// 密钥可以使用我前面文章中的方法生成
//使用
// let token = generateToken({_id: _id}, time)//生成cookie
// //保存到客户端浏览器的cookie中
// ctx.cookies.set('token', token,{
//     maxAge: time * 1000,
//     path: '/',
//     domain: 'localhost',
//     httpOnly: false,
// });
// // 保存到redis
// app.redis.set(username, token)
 
}

module.exports = LoginController;
