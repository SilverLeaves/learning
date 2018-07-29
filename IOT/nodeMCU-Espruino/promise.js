var riji = (value) => {
    console.log(value);
};

var thing1 = (todo) => {
    console.log("cooking");
    var value = "foods";
    setTimeout(() => {
        todo(value);
    }, 1500);
};
var thing2 = (todo) => {
    console.log("eating");
    var value = "tired";
    setTimeout(() => {
        todo(value);
    }, 1500);
};
var thing3 = (todo) => {
    console.log("sleeping");
    var value = "activity";
    setTimeout(() => {
        todo(value);
    }, 1500);
};

var myThing = new Promise((resovle, reject) => {
    thing1((data) => {
        resovle(data);
    });
});

var doThing = () => {
    console.log("getting up");
    myThing.then(riji);
    myThing.then(riji);
    myThing.then(riji);
    myThing.then(riji);
    console.log("just do what you wangt to do!");
};

doThing();