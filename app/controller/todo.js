'use strict';

const Controller = require('egg').Controller;

class ToDoController extends Controller {
  async getMostImportant() {
    const { ctx } = this;
    //前端传递来的token
    let user = this.ctx.request.header.user;
    // console.log("要查的user是："+user);
    let res = {};
    res.content = await this.ctx.service.database.getMostImportant(user);
    //正常返回内容
    res.code = 200;
    ctx.body = res;
  }
  async getTodoList(){
    const { ctx } = this;
    let date = this.ctx.query.date;
    // let user = this.ctx.query.user;
    let res = {};
    res.content = await this.ctx.service.database.getTodoList(date);
    res.code = 200;
    ctx.body = res;
  }
  async postTodoList(){
    const { ctx } = this;
    let res = {};
    let req_body = this.ctx.request.body;
    res.content = await this.ctx.service.database.postTodoList(req_body);
    res.code = 200;
    ctx.body = res;
  }
  async changeStatus(){
    const { ctx } = this;
    const id = ctx.params.id;
    const status = ctx.query.status;
    let res = {};
    res.content = await this.ctx.service.database.changeStatus(id,status);
    res.code = 200;
    ctx.body = res;
  }
}

module.exports = ToDoController;
