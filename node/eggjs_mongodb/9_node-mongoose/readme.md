# Mongoose 连接 Mongodb 数据库引擎

## mongoose文档

* 查看npm文档[Mongoose](https://www.npmjs.com/package/mongoose)
* 官网查看文档

## 安装 Mongoose

* 初始化项目
* 安装 mongoose
  ```plaintext
  yarn add mongoose
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
