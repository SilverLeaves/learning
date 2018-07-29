# node 从接触 Koa2 到上手 Egg2 之接触 egg-mongoose——昝磊

## 安装 node

* 至[Node.js 官网](http://www.nodejs.org)下载 node8.9.x LTS 版本(长期支持版本)</p>

## 安装你喜欢的编辑器

* Visual studio code、
* Atom
* ...

本次以 Visual studio code 演示

## 初始化项目

* 打开终端
  ```plaintext
  Ctrl+`
  ```

* 输入初始化项目命令
  ```plaintext
  npm init
  ```

* 输入安装 egg 命令
  ```plaintext
  npm install egg --save
  ```

* 输入安装 egg-dev 命令
  ```plaintext
  npm install egg-bin --save-dev
  ```

## 信条：**约定大于配置**

## MVC 架构的 controller

* 新建文件夹./app/controller/
* 新建./app/controller/index.js

### Hello world

* 拿到 egg 对象
  ```js
  const egg = require("egg");
  ```

* 拿到 Controller 基类
  ```js
  const Controller = egg.Controller;
  ```

* 基于 Controller 基类写一个自己的 Controller 类
  ```js
  class HomeController extends Controller {}
  module.exports = HomeController;
  ```

* 在自己 Controller 类中写一个控制器函数
  ```js
  class HomeController extends Controller {
    async index() {
      this.ctx.body = "Hello world";
    }
  }
  ```

## 路由

* 新建./app/router.js

* 开始撰写要导出路由模块
  ```js
  module.exports = app => {};
  ```

* 开始撰写要导出路由模块
  ```js
  module.exports = app => {
    const { router, controller } = app;
    router.get("/", controller.index.index);
  };
  ```

## egg.ctx

* 继续撰写如下 controller
  ```js
  class HomeController extends Controller {
    async index() {
      this.ctx.body = "Hello world";
    }
    async about() {
      this.ctx.body = "这个是关于";
    }
    async get() {
      this.ctx.body = {
        url: this.ctx.url,
        method: this.ctx.method,
        query: this.ctx.query
      };
    }
    async getId() {
      this.ctx.body = {
        id: this.ctx.params.id,
        url: this.ctx.url,
        method: this.ctx.method,
        query: this.ctx.query
      };
    }
  }
  ```

* 继续撰写如下路由
  ```js
  module.exports = app => {
    const { router, controller } = app;
    router.get("/", controller.index.index);
    router.get("/about", controller.index.about);
    router.get("/get", controller.index.get);
    router.get("/getid/:id", controller.index.getId);
  };
  ```

* 进行测试
* 打开
  ```url
  http://host:port/
  ```

* 打开
  ```url
  http://host:port/about
  ```

* 打开
  ```url
  http://host:port/get?page=5&number=10
  ```

* 打开
  ```url
  http://host:port/getid/1234567?page=5&number=10
  ```

## 静态资源服务器

* 安装静态资源服务插件
  ```url
  npm i egg-static --save
  ```

* 打开
  ```url
  http://host:port/public/index.html
  ```

## egg-mongoose插件

* 查看文档[Mongoose](https://www.npmjs.com/package/mongoose)
* 官网查看文档

## 安装 Mongoose

* 初始化项目
* 安装 mongoose
  ```plaintext
  yarn add egg-mongoose
  ```

## 连接数据库引擎

* 新建项目文件
* 导入 mongoose

  ```js
  var mongoose = require("mongoose");
  ```

* 一次持久的连接

  ```js
  mongoose.connect("mongodb://127.0.0.1:27017/pinza");
  ```

* 定义一个模式并绑定到数据库

  ```js
  const dataSchema = new mongoose.Schema({});
  const dataModel = mongoose.model("modelName", dataSchema, "it");
  ```

* 查找数据以测试连接
  ```js
  dataModel.find((err, res) => {
    if (err) {
      throw err;
    }
    console.log(res.toString());
  });
  ```
