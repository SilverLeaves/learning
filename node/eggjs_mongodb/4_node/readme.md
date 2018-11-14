# node 从接触 Koa2 到上手 Egg2 之原生 Node——昝磊

## 安装 node

* 至[Node.js 官网](http://www.nodejs.org)下载 node8.9.x LTS 版本(长期支持版本)</p>

## 安装你喜欢的编辑器

* Visual studio code、
* Atom
* ...

  本次以 Visual studio code 演示

## 写一个简单的服务器程序

* 项目根目录下新建 app.js
* 为了使用 Koa2，首先我们需要先引入安装好的 Koa2 模块

  ```js
  var http = require("http");
  ```

* 为了使用服务器，我们需要一个创建一个服务器

  ```js
  var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello World");
  });
  ```

* 开始服务器监听
  ```js
  server.listen(80, function() {
    console.log("服务器已启动！");
  });
  ```
