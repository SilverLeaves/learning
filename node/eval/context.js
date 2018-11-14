// 上下文this为空对象
setImmediate(() => {
    console.log(this);
    console.log(this === global);
})

// 上下文对象为setImmediate
setImmediate(function () {
    // console.log(this);
    console.log(this === global);
})

// 上下问对象为global
function test1() {
    console.log(this === global);
    setImmediate(() => {
        console.log(this === global);
    })
}
test1()

// 上下问对象为global
// 一个常规函数的上下文为
function test2() {
    console.log(this === global);
    setImmediate(function () {
        // console.log(this);
        console.log(this === global);
    })
}
test2()

// 内置函数的上下问对象为setImmediate
// 一个常规函数的上下文为
function test3() {
    function inner1() {
        console.log(this === global);
        setImmediate( ()=> {
            console.log("测试3函数内的内置函数的执行");
            console.log(this === global);
        })
    }
    inner1()
}
test3()

// 内置函数的上下问对象为setImmediate
// 一个常规函数的上下文为
function test4() {
    function inner2() {
        console.log(this === global);
        setImmediate(function () {
            console.log("测试4函数内的内置函数的执行");
            // console.log(this);
            console.log(this === global);
        })
    }
    inner2()
}
test4()

// 上下文this为空对象
// 即使后置也为空对象
setImmediate(() => {
    console.log(this);
    console.log(this === global);
})

console.log(`异步执行的结果`);