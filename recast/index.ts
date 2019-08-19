import * as recast from "recast"

let code = `
// 加和函数
function add(a,b){
    // 返回加和
    return a + b;
}

`

let ast = recast.parse(code);

console.log(ast.program.body)

let outCode = recast.print(ast)

console.log(outCode)

let prettyOutCode = recast.prettyPrint(ast)

console.log(prettyOutCode)