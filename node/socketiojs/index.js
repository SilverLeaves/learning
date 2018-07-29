var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

//req:request请求
//res:response回应
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
let i = 0;
io.on('connection', function(socket){
    i++;
    console.log('a user connected'+i);
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit("chat mesage",msg);
      });
  });

// 启动服务
//啊啊啊啊
http.listen(8081, () => {
    console.log("listen on *:8081");
})