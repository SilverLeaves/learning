# Egg上手

## 框架内置基础对象

* > [框架内置基础对象](https://eggjs.org/zh-cn/basics/objects.html)
* this
  *this对象比较特殊，分析应为每次请求时和ctx一起实例化一个，然后将app、ctx等挂在this之下
* Application
  * 特点

    * 继承自Koa.application
    * 全局应用对象
    * 一个应用只会实例化一次

  * 获取
    * > 几乎所有被框架 Loader 加载的文件（Controller，Service，Schedule 等），都可以 export 一个函数，这个函数会被 Loader 调用，并使用 app 作为参数
    * > [框架内置基础对象](https://eggjs.org/zh-cn/basics/objects.html)
    * 启动自定义脚本
      ```js
      // app.js
      module.exports = (app) => {
          app.cache = new Cache();
      };
      ```
      分析：这里函数在定义的时候就是直接时作为参数传进来的，所以直接使用即可
    * Controller
      * 直接使用
        ```js
        // app/controller/user.js
        class UserController extends Controller {
            async fetch() {
                this.ctx.body = app.cache.get(this.ctx.query.id);
            }
        }
        ```
        分析：`经过测试直接使用报错，不赞成使用`
      * this.ctx.app
        ```js
        // app/controller/user.js
        class UserController extends Controller {
            async fetch() {
                this.ctx.body = this.ctx.app.cache.get(this.ctx.query.id);
            }
        }
        ```
        分析：经过测试this.app===this.ctx.app为真
    * 继承于 Controller, Service 基类的实例
      * this.app
        ```js
        // app/controller/user.js
        class UserController extends Controller {
            async fetch() {
                this.ctx.body = this.app.cache.get(this.ctx.query.id);
             }
        };
        ```
  * 建议使用`this.app或者this.ctx.app`,经过测试this.app===this.ctx.app为真
* context
  * 特点
    * > Context 是一个请求级别的对象，继承自 Koa.Context。在每一次收到用户请求时，框架会实例化一个 Context 对象，这个对象封装了这次用户请求的信息，并提供了许多便捷的方法来获取请求参数或者设置响应信息。框架会将所有的 Service 挂载到 Context 实例上，一些插件也会将一些其他的方法和对象挂载到它上面（egg-sequelize 会将所有的 model 挂载在 Context 上）
    * 请求级别的对象
    * 继承自Koa.Context
    * 每次请求时实例化

  * 获取
    * 常规下挂在this下
    * 特别的，在启动自定义脚本是需要创建一个匿名 Context 实例
      ```js
      // app.js
      module.exports = app => {
        app.beforeStart(async () => {
            const ctx = app.createAnonymousContext();
            // preload before app start
            await ctx.service.posts.load();
        });
      }
        ```
    * 在定时任务中的每一个 task 都接受一个 Context 实例作为参数
      ```js
        // app/schedule/refresh.js
        exports.task = async ctx => {
             await ctx.service.posts.refresh();
        };
      ```
其他模块一般挂在this、ctx或者app之下。