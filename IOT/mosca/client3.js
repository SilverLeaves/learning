var net = require('net')
var mqttCon = require('mqtt-connection')
var stream = net.createConnection(1883, 'localhost')
var conn = mqttCon(stream)
conn.publish('presence', 'Hello mqtt,我是client3');

conn.stream
function test(){
    setTimeout(() => {
        conn.publish('presence', 'Hello mqtt,我是client3');
        console.log("fa bu");
        
        test();
    }, 1000);
}
// test();