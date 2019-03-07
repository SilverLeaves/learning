let axios = require("axios")
let getRawBody = require('raw-body')

module.exports.handler = async function (req, resp, context) {
    resp.setHeader("Content-Type", "application/json")
    if (req.method != "POST") {
        resp.setStatusCode(200)
        resp.setHeader('content-type', 'application/json')
        resp.send(`当前请求方式：${req.method}，但这里需要一个POST请求！`)
        return
    }
    try {
        let requestBody = await getRawBody(req)
        let data=JSON.parse(requestBody.toString())

        let fun = eval(`${data.scriptString}`)
        let response = await fun(data.data.url)

        resp.setStatusCode(200)
        resp.setHeader('content-type', 'application/json')
        resp.send(JSON.stringify(response.data))
    } catch (error) {
        resp.send(error.toString());
    }
}