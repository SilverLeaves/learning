var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883', {
    keepalive: 10
});
var i=0;

client.on('connect', function () {
    client.subscribe('presence');
    client.publish('presence', 'Hello mqtt,我是client1');


});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    
    //client.end();
    // client.publish('presence', 'Hello mqtt,我是client1');
});

function test(){
    setTimeout(() => {
        client.publish('presence', 'Hello mqtt,我是client1');
        console.log("fa bu");
        
        test();
    }, 1000);
}
test();