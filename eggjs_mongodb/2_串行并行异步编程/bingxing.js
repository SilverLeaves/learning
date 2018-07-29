var thing1=()=>{
    console.log("1号开始调查");
    setTimeout(() => {console.log("1号调查中");},1500);
    setTimeout(() => {console.log("1号调查完毕");},3000);
}
var thing2=()=>{
    console.log("2号开始调查");
    setTimeout(() => {console.log("2号调查中");},1500);
    setTimeout(() => {console.log("2号调查完毕");},3000);
}
var thing3=()=>{
    console.log("3号开始调查");
    setTimeout(() => {console.log("3号调查中");},1500);
    setTimeout(() => {console.log("3号调查完毕");},3000);
}

var doThing=()=>{
    console.log("给你们分派调查任务");
    var todoList=[ thing1, thing2, thing3];

    //下面两种方式均可
    // for(list of todoList){
    //     list();
    // }

    todoList.forEach((item)=>{
        item();
    });
    console.log("分派完毕，开始执行");
}

doThing();