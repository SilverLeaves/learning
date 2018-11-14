# egg架构简介

* > egg 为企业级框架和应用而生
> [Egg官网](http://eggjs.org/)

****

## 历史

* > 2011 年的就已经开始在生产环境中使用Node。
* > 2013 年蚂蚁的 chair 框架，可以视为 egg 的前身。
* > 2016 年初，各 BU 的基础 web 框架完成升级，在同一套规范的基础上进行差异化定制。
* > 2016 年中，广泛使用在绝大部分阿里的前端 Node.js 应用
* > 2017 年初，官网文档 egg - 为企业级框架和应用而生 亮相，并将在本月发布 egg@1.0 版.
* > 蚂蚁金服，天猫，UCWeb，村淘，神马等 BU 的业务场景千差万别，但他们的基础框架都是在egg之上扩展的
> [知乎](https://www.zhihu.com/question/50526101/answer/126036051)

## egg2

* > Egg 的插件机制有很高的可扩展性，一个插件只做一件事（比如 Nunjucks 模板封装成了 egg-view-nunjucks、MySQL 数据库封装成了 egg-mysql）。Egg 通过框架聚合这些插件，并根据自己的业务场景定制配置，这样应用的开发成本就变得很低。

* > Egg 奉行『约定优于配置』，按照一套统一的约定进行应用开发，团队内部采用这种方式可以减少开发人员的学习成本，开发人员不再是『钉子』，可以流动起来。没有约定的团队，沟通成本是非常高的，比如有人会按目录分栈而其他人按目录分功能，开发者认知不一致很容易犯错。但约定不等于扩展性差，相反 Egg 有很高的扩展性，可以按照团队的约定定制框架。使用 Loader 可以让框架根据不同环境定义默认配置，还可以覆盖 Egg 的默认约定。

### 基于koa2

* 异步编程模型_async&await function

        通过同步方式编写异步代码带来的另外一个非常大的好处就是异常处理非常自然，使用 try catch 就可以将按照规范编写的代码中的所有错误都捕获到。
* Middleware_洋葱圈模式

        所有的请求经过一个中间件的时候都会执行两次，对比 Express 形式的中间件，Koa 的模型可以非常方便的实现后置处理逻辑
* context

        Context 作为请求的上下文对象，request、response以及参数处理结果都挂在上面。同样我们可以将一次请求相关的上下文都挂载到这个对象上。需要贯穿整个请求（在后续任何一个地方进行其他调用都需要用到）的属性就可以挂载上去。

### 内置功能

* > power-assert            |测试
* > Mocha                   |测试
* > HttpClient
* > Cookie 与 Session
* > egg-cluster             |多进程与进程守护

### 插件机制

* 内置企业级插件
  * > onerror               |错误处理
  * > session               |会话
  * > i18n                  |国际化
  * > watcher               |文件监控
  * > multipart             |文件接收
  * > security              |安全
  * > development           |开发
  * > logrotator            |日志整理
  * > schedule              |定时事物
  * > static                |静态资源服务
  * > jsonp                 |跨域
  * > view                  |MVC架构的V

* 生态插件库
  * > egg-mongoose          |MongooDB
  * > egg-mongodb-native    |MongooDB
  * > egg-mysql             |mysql
  * > egg-redis
  * > egg-oss               |OSS

  * > egg-bodyparser        |body解析器

  * > egg-RESTfulAPI        |restfulAPI

  * > egg-grpc              |通信服务
  * > egg-egg-cors          |跨域资源共享

  * > egg-egg-userrole      |授权
  * > egg-passport          |认证
  * > egg-passport-local    |认证

  * > egg-nunjucks          |模板
  * > egg-vue-webpack-dev
  * > egg-view-vue
  * > egg-view-vue-ssr

  * > egg-socket_io         |即时通信
  * > egg-Dingtalk          |钉钉
  * > egg-Dingtalk-robot
  * > egg-wechat-API        |微信
  * > egg-weapp-sdk         |微信

>[github插件库](https://github.com/search?q=topic%3Aegg-plugin&type=Repositories)

## 架构

* MVC架构
* 渐进式开发