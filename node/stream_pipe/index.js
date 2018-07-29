const https = require('https');
const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            {
                fs.readFile("./index.html", (err, data) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    res.end(data);
                })
                break;
            }
        case "/download":
            {
                //get 请求外网
                // https://nodejs.org/dist/v10.7.0/node-v10.7.0-x64.msi
                // https://www.7-zip.org/a/7z1805-x64.exe
                https.get(
                    'https://codeload.github.com/XX-net/XX-Net/zip/3.12.10',
                    function (response) {
                        console.log(response.headers)
                        console.log("开始转发");
                        res.setHeader('content-length',response.headers['content-length']);
                        response.pipe(res);
                        response.on('end', function () {
                            res.end();
                            console.log("转发完毕");
                        });
                    });
                break;
            }
    }
})

server.listen(80, () => {
    console.log("服务已启动");
})