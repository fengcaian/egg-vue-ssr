'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.render('home/home.js', { message: 'vue server side render!' });
  }
}

module.exports = HomeController;
