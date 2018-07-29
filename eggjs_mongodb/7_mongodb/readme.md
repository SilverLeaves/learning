# 初识 MongoDB 数据库引擎

## 安装 MongoDB 数据库引擎

* 至[MongoDB 官网](https://www.mongodb.com/)下载 版本(长期支持版本)
* 中文文档参考[MongoDB中文社区文档](http://www.mongoing.com/docs/)

## 简单的 conf

* 数据库、日志、端口
  ```plaintext
  dbpath = <你的数据库存放路径>
  logpath = <你的日志存放路径>
  logappend = true
  port = 27017
  ```

## 启动 MongoDB 数据库引擎

* 命令参数启动
  ```plaintext
  mongod --dbpath <你的数据库存放路径> --logpath <你的日志存放路径> --port <你开放的端口>
  ```
* 安装为服务
  ```plaintext
  mongod --install --dbpath <你的数据库存放路径> --logpath <你的日志存放路径> --port <你开放的端口>
  ```
* 配置文件启动
  ```plaintext
  mongod -f <你的配置文件存放路径>
  ```
* 安装为服务
  ```plaintext
  mongod --install -f <你的配置文件存放路径>
  ```

## 终端连接 MongoDB 数据库引擎

* 终端下连接
  ```plaintext
  mongo
  mongo <host>
  mongo <host> -u <userName> -p <password>
  mongo <host:port> -u <userName> -p <password>
  mongo <host:port/dbname> -u <userName> -p <password>
  ```

## 终端数据库操作

* 展示数据库
  ```plaintext
  show dbs
  ```
* 使用数据库
  ```plaintext
  use <db>
  ```
  ```plaintext
  use pinza
  ```
* 显示当前使用的数据库
  ```plaintext
  db
  ```
* 删除数据库
  ```plaintext
  db.dropDatabase()
  ```
  * 显示当前数据库的collection
  ```plaintext
  show collections
  ```
  * 删除数集合
  ```plaintext
  db.collection.drop()
  ```

## 数据库集合操作 CURD

* 增
  ```plaintext
  db.<collection>.insert({})
  db.<collection>.insert([{},{}])
  ```
  ```plaintext
  db.it.insert({name:"dengtengfei",sex:1,weight:99})
  db.it.insert({name:"zanlei",sex:1,weight:108})
  db.it.insert({name:"shenjinhua",sex:1,weight:112})
  db.it.insert({name:"xiemengxiu",sex:1,weight:140})
  db.it.insert({name:"yaojiani",sex:0,weight:88})
  db.it.insert({name:"xxx",sex:0,weight:88})
  db.it.insert({name:"xxx",sex:0,weight:88})
  db.it.insert({name:"yyy",sex:0,weight:112})
  db.it.insert({name:"yyy",sex:0,weight:100})
  ```
* 删
  ```plaintext
  db.<collection>.remove({})
  db.<collection>.remove([{},{}])
  ```
* 查
  ```plaintext
  db.<collection>.find({},{})
  ```
* 改
  ```plaintext
  db.<collection>.updataMany({},{})
  ```

## 查询与分页

* 排序
  ```plaintext
  升序用1表示，降序用-1
  db.<collection>.find({}).sort({})
  ```
* 跳过

  ```plaintext
  db.<collection>.find({}).skip(<p*n>)
  ```

* 限量
  ```plaintext
  db.<collection>.find({}).limit(<n>)
  ```

### 分页

* 简单分页
  ```plaintext
  db.<collection>.find({}).sort({}).skip(<p*n>).limit(<n>)
  ```

## 再探查询

* 按条件查询
  ```plaintext
  db.<collection>.find({<field1>: { <operator1>: <value1> }, ...})
  //
  db.users.find( { status: { $in: [ "P", "D" ] } } )
  //
  db.users.find({$or: [ { status: "A" }, { age: { $lt: 30 } } ]})
  //
  //大于，小于
  $gt，$lt
  ```

## 再探更新

* 设置更新
  ```plaintext
  {
   <update operator>: { <field1>: <value1>, ... },
   <update operator>: { <field2>: <value2>, ... },
   ...
  }
  db.users.updateMany(
   { "name": "xiemengxiu" },
   {
     $set: { "weight": 150, type: 3 },
   }
  )
  ```