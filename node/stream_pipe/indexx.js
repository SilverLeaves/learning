const https = require('https');
const http = require("http")
const fs = require("fs")
module.exports.handler = function (req, resp, context) {
    //get 请求外网
    // https://nodejs.org/dist/v10.7.0/node-v10.7.0-x64.msi
    // https://www.7-zip.org/a/7z1805-x64.exe
    https.get(
        'https://codeload.github.com/XX-net/XX-Net/zip/3.12.10',
        function (response) {
            console.log(response.headers)
            console.log("开始转发");
            resp.setHeader('content-length', response.headers['content-length']);
            response.pipe(resp);
            response.on('end', function () {
                resp.end();
                console.log("转发完毕");
            });
        }
    )
}