# MongoDB 数据库引擎连接基础

## 安装 MongoDB 数据库引擎

* 至[MongoDB 官网](https://www.mongodb.com/)下载 node8.9.x LTS 版本(长期支持版本)
* [npm 文档参考](https://www.npmjs.com/package/mongodb)

## 简单的 MongoDB 数据库引擎连接

* 启动服务器

* 初始化项目并安装 mongodb 模块

  ```plaintext
  yarn init
  yarn add mongodb
  ```

* 引入 mongodb 并获取 mongoClient

  ```js
  var mongoDB = require("mongodb");
  var mongoClient = mongoDB.MongoClient;
  ```

* 参数

  ```js
  var host = "mongodb://127.0.0.1:27017";
  var dbName = "pinza";
  ```

* 连接数据库

  ```js
  mongoClient.connect(host, function(err, client) {
    if (err) {
      throw err;
    }
    console.log("成功连接到数据库引擎");
    client.close();
  });
  ```

* 查询数据库

  ```js
  mongoClient.connect(host, function(err, client) {
    if (err) {
      throw err;
    }
    console.log("成功连接到数据库引擎");
    var db = client.db(dbName);
    var collection = db.collection("it");
    collection.find({}).toArray((err, docs) => {
      if (err) {
        throw err;
      }
      console.log(docs);
    });
    client.close();
  });
  ```
