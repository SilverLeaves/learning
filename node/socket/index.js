var http=require("http");
var socket=require("socket.io");

var server=http.createServer((req,res)=>{
    res.end("Hello");
});

//会自动添加一个路由，即可访问以下资源
//http://localhost/socket.io/socket.io.js
var scok=socket(server);

server.listen(80,"127.0.0.1");
