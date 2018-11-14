const fs = require("fs")
let promise_script = fs.readFileSync("./return_promise.js").toString("utf-8")
let async_function_script = fs.readFileSync("./return_async_function.js").toString("utf-8")

let result = null;

// promise
async function getResponse() {
    result = eval(`${promise_script}`)
    console.log(typeof result);
    console.log(result);
    hello()
    try {
        result = await result;
        console.log(typeof result);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getResponse()
hello()


// async function
// async function getResponse() {
//     result = eval(`${async_function_script}`)
//     console.log(typeof result);
//     console.log(result);
// 作用域测试
//     hello()
    // try {
    //     result = await result;
    //     console.log(typeof result);
    //     console.log(result);
    // } catch (error) {
    //     console.log(error);
    // }
// }
// getResponse()
// 作用域测试
// hello()