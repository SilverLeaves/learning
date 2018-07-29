var doing=()=>{
    var dateStart=Date.now();
    while(1500>(Date.now()-dateStart)){
        
    }
}

var thing1=()=>{
    console.log("");
    console.log("开始做第一件事");
    doing();
    console.log("第一件事做完");
}
var thing2=()=>{
    console.log("");
    console.log("开始做第二件事");
    doing();
    console.log("第二件事做完");
}
var thing3=()=>{
    console.log("");
    console.log("开始做第三件事");
    doing();
    console.log("第三件事做完");
}

var doThing=()=>{
    console.log("开始上班喽");
    thing1();
    thing2();
    thing3();
    console.log("加班回来了");
}

doThing();
