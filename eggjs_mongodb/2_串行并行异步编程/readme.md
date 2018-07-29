# 异步编程与async_await

## 串行编程

>简单的理论基础就是日子一天挨着一天过

```js
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
```

## 并行编程

>简单的理论基础就是让几个人一起干活
```js
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
```

## 异步编程

>简单的理论基础就是告诉别人干完一件事接着再干下一件事

```js
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
```