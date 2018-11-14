const axios = require("axios")
const fs = require("fs")

const script = fs.readFileSync("./script.js").toString()
console.log(script);

async function go() {
    try {
        let response = await axios.post("https://1828454503293647.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/httphelloworld/hello/", {
            data: {
                url:`http://106.14.219.21:8089/spu/list.json?limit=10&page=1`
            },
            scriptString:script
        });
        console.log(JSON.stringify(response.data));
    } catch (error) {
        console.error(error);
    }
}

go();