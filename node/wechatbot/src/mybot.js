const {
    Wechaty
} = require('wechaty') // import { Wechaty } from 'wechaty'
const {
    createWriteStream,
} = require('fs')
const bot = Wechaty.instance()

bot.on('scan', (qrcode, status) => {
    console.log('登录中...');
    if (!/201|200/.test(String(status))) {
        let loginUrl = qrcode.replace(/\/qrcode\//, '/l/')
        require('qrcode-terminal').generate(loginUrl)
    }
    console.log(`Scan QR Code to login: ${status}\n${qrcode}`)
    console.log('或复制上面网址到谷歌Chrome浏览器进行扫码登录');
})
bot.on('login', user => console.log(`用户 ${user} 登录成功`))
bot.on('message', message => {
    console.log(`消息: ${message}`)
    console.log('发送自');
    console.log(message.from());
    console.log('内容');
    console.log(message.filename());
    const fileStream = createWriteStream('./image/' + message.filename())

    console.log('start to readyStream()')
    message.readyStream()
        .then(stream => { //下载图片到本地
            try {
                stream.pipe(fileStream).on('close', (data) => {
                    console.log('传输完成');
                })
            } catch (error) {
                console.log('传输错误' + error);
            }
        })
})
bot.start()