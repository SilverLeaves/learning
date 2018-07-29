const egg= require('egg');
const Controller = egg.Controller;

class HomeController extends Controller {
  async index() {
    
    this.ctx.body = 'Hello world';
  };

  async about() {
    this.ctx.body = '这个是关于';
  };

  async get(){
    
    this.ctx.body = {
      url: this.ctx.url,
      method:this.ctx.method,
      query:this.ctx.query
    };
  };

  async getId(){

    this.ctx.body = {
      id:this.ctx.params.id,
      url: this.ctx.url,
      method:this.ctx.method,
      query:this.ctx.query
    };
  };
};

module.exports = HomeController;