function syncfun(x) {
    return x**3
}

async function test(params) {
    let result = await syncfun(params)
    console.log(result);
}

test(2)