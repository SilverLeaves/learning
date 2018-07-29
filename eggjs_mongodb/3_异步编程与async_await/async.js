//await 关键字只能用在async函数中

var hello =async ()=>{
    return "hello async";
}

console.log(hello());

console.log(hello().then((data)=>{
    console.log(data);
}));

// 现在回过头来想下，如果 async 函数没有返回值，又该如何？
// 很容易想到，它会返回 Promise.resolve(undefined)。
// 联想一下 Promise 的特点——无等待，
// 所以在没有 await 的情况下执行 async 函数，它会立即执行，返回一个 Promise 对象，
// 并且，绝不会阻塞后面的语句。
// 这和普通返回 Promise 对象的函数并无二致。
// 那么下一个关键点就在于 await 关键字了。

