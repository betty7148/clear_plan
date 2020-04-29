'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res = {};
    res.content = 'hi,egg';
    res.status = 200;
    ctx.body = 'hi,egg';
     
  }
}

module.exports = HomeController;
