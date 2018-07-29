//promise 传递的是数据，所以我这里理解有问题

var riji = (value) => {
    console.log(value)
}

var thing1 = (todo) => {
    console.log("做饭");
    var value = "饭";
    setTimeout(() => {
        todo(value);
    }, 1500);
}
var thing2 = (todo) => {
    console.log("吃饭");
    var value = "困";
    setTimeout(() => {
        todo(value);
    }, 1500);
}
var thing3 = (todo) => {
    console.log("睡觉");
    var value = "精神";
    setTimeout(() => {
        todo(value);
    }, 1500);
}

var myThing = new Promise((resovle, reject) => {
    thing1((data) => {
        resovle(data);
    });
})

var doThing = () => {
    console.log("起床了");
    myThing.then(riji);
    myThing.then(riji);
    myThing.then(riji);
    myThing.then(riji);
    console.log("你今天自己做饭吃饭完了没事就睡觉吧！");
}

doThing();