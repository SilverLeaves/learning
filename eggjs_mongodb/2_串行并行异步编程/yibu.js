then=(thing)=>{
    setTimeout(thing,1500);
}

var thing1=()=>{
    console.log("做饭");
    then (thing2);
}
var thing2=()=>{
    console.log("吃饭");
    then (thing3);
}
var thing3=()=>{
    console.log("睡觉");
}


var doThing=()=>{
    console.log("起床了");
    then(thing1);
    console.log("你今天自己做饭吃饭完了没事就睡觉吧！");
}

doThing();