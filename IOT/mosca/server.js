var mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 1883,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

//客户端连接时调用
server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// 接收到消息时调用
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// mqtt服务器准备好时调用
function setup() {
  console.log('Mosca server is up and running');
}