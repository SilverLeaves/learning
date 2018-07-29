var esp8266 = require('ESP8266');
var http = require('http');
var wifi = require('Wifi');

wifi.connect("17-8003",{password: "1234567890"},function(err){
  if(err)console.log(err);
  else {
  console.log("Wifi connected! \nWifi infor:");
  console.log(wifi.getIP());}});

var server=http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello World</h1>');
});

server.listen(80);

console.log('HttpServer starting!');

