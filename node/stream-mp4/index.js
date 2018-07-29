const http = require("http")
const path = require("path")
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
        case "/test.mp4":
            {
                var stream = fs.createReadStream("./test.mp4");
                stream.pipe(res);

                stream.on("end", () => {
                    res.end();
                    console.log("视频发送完毕");
                })
                break;
            }
    }
})

server.listen(80, () => {
    console.log("服务已启动");
})