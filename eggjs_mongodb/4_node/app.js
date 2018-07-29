var Http = require('http');  

var server=Http.createServer(function (request, response) {  
    response.writeHead(200, {'Content-Type': 'text/html'});  
    response.end('<h1>Hello World</h1>');  
});

server.listen(80,function (){
    console.log('服务器已启动！');  
})