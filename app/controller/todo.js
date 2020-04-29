'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getMostImportant() {
    const { ctx } = this;
    let res = {};
    res.content = '高考';
    //正常返回内容
    res.status = 200;
    ctx.body = res;
  }
}

module.exports = HomeController;
