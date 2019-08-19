import * as qs from "qs"

let user = { userId: null, userName: "", sex: "male", school: { name: "jialidun", teacher: [{ name: "laowang" }, { name: "xiongmaoren" }] } }

let code=qs.stringify(user)
let decode=qs.parse(code)
console.log(code)

console.log(decode)
