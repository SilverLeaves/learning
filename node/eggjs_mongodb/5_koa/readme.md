# node 从接触 Koa2 到上手 Egg2 之接触 Koa2——昝磊

## 安装 node

* 至[Node.js 官网](http://www.nodejs.org)下载 node8.9.x LTS 版本(长期支持版本)

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
* 输入安装 Koa2 命令
  ```plaintext
  npm install koa
  ```

## 写一个简单的服务器程序

* 项目根目录下新建 app.js

* 为了使用 Koa2，首先我们需要先引入安装好的 Koa2 模块
  ```js
  var Koa = require("koa");
  ```
* 为了使用 Koa2，我们需要一个创建一个 koa2 对象
  ```js
  var app = new Koa();
  ```
* 开始服务器监听
  ```js
  app.listen(80, function() {
    console.log("服务已启动");
  });
  ```

## Hello world

* 注册请求处理函数
  ```js
  app.use(async (ctx, next) => {
    await next();
  });
  ```
* 当浏览器请求页面时，将返回内容设置为 Hello world
  ```js
  app.use(async (ctx, next) => {
    await next();
    ctx.response.body = "Hello world!" + ctx.url;
  });
  ```

## ctx(context)对象

### 为编写 Web 应用程序和 API 提供了许多有用的方法

* Koa Context 将 node 的 request 和 response 对象封装到单个对象中
  ```js
  app.use(async (ctx, next) => {
    await next();
    ctx.response.body = {
      url: ctx.url,
      method: ctx.method,
      query: ctx.query
    };
  });
  ```

#### ctx.#.\*

* ctx.request 代表 HTTP Request

ctx.request.body 代表 HTTP Request 的 Form 表单

* ctx.response 代表 HTTP Response

ctx.response.body 代表 HTTP Response 的内容（网页代码、图片、CSS、JS 文件 etc）

#### ctx.\*

* ctx.url 代表请求路径
* ctx.method 代表请求路径
* ctx.query 代表查询对象
* ctx.body 代表返回的内容
* ...
* 许多有用的方法...

## next()与中间件的理解

* app.use(async function(){})会 Push 里面的 Function 到一个函数列表

* await next()会调用下一个被 Push 到函数列表的函数
  ```js
  app.use(async (ctx, next) => {
    await next();
    ctx.response.body += "Hello world!1" + ctx.url;
  });
  app.use(async (ctx, next) => {
    await next();
    ctx.response.body += "Hello world!2";
  });
  app.use(async (ctx, next) => {
    await next();
    ctx.response.body = "Hello world!3";
  });
  ```

## promise、async、wait 与异步机制

### 像写同步代码一样写异步代码

* promise
* ES6 async
* ES6 wait

## 请求分发与路由

* 路由
  ```js
  app.use(async (ctx, next) => {
    await next();
    ctx.response.body = "404 找不到网页!";
    switch (ctx.url) {
      case "/":
        ctx.body = "这个是主页";
        break;
      case "/about":
        ctx.body = "这个是关于";
        break;
      default:
    }
  });
  ```
