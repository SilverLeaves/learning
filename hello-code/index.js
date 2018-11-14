let axios = require("axios")

module.exports.handler = async function (req, resp, context) {
    resp.setHeader("Content-Type", "application/json")
    try {
        console.log("hello world");
        let res = await axios.get("http://106.14.219.21:8089/sku/list.json?limit=10&page=1")
        resp.send(JSON.stringify(res.data));
    } catch (error) {
        resp.send(error);
    }
}