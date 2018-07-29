//加载koa2类
var Koa=require("koa");
//new一个koa对象
var app=new Koa();

//Hello world
// app.use(async (ctx,next)=>{
//     await next();
//     ctx.response.body="Hello world  --koa!"+ctx.url;
// }); 

//ctx(context)对象
// app.use(async (ctx,next)=>{
//     await next();

//     ctx.response.body={
//         url:ctx.url,
//         method:ctx.method,
//         query:ctx.query,
//     };

// });

//next与中间件
// app.use(async (ctx,next)=>{
//     await next();
//     ctx.response.body+="<h1>Hello world!1</h1>"+ctx.url;
//     ctx.response.type="text/html";
// });
// app.use(async (ctx,next)=>{
//     await next();
//     ctx.response.body+="<h1>Hello world!2</h1>";
//     ctx.response.type="text/html";
// });
// app.use(async (ctx,next)=>{
//     await next();
//     ctx.response.body="<h1>Hello world!3</h1>";
//     ctx.response.type="text/html";
// });



//请求分发与路由
app.use(async (ctx,next)=>{
    await next();
    ctx.response.body="<h1>404 找不到网页!</h1>";
    switch(ctx.url){
        case "/":ctx.body="<h1>这个是主页</h1>";break;
        case "/about":ctx.body="<h1>这个是关于</h1>";break;
        default:;
    }
}); 

//监听80端口
app.listen(80,()=>{
    console.log("服务已启动")
});
