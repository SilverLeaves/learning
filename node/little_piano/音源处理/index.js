// node index.js 以构建音源到json

var fs = require('fs');
var file = 'notes.json';

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    console.log()
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

fs.readdir('./piano', function (error, files) {
    if (error) {
        console.error(error)
    }
    console.info("音频文件目录：")
    console.log(files)
    console.info("共"+(files.length)+"文件")
    var content = "";
    // 这里并没有进行文件名校验，所以要先观察音频是否是按顺序排列的
    files.forEach((f, index) => {
        console.info("正在编码"+('./piano/'+f)+"文件")
        var data = base64_encode('./piano/'+f);
        content += `"${data}",\n`;
    });
    console.info("编码结束")
    fs.writeFileSync(file, content);
});