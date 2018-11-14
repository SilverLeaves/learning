const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        devtools: true,
    });
    const page = await browser.newPage();
    await page.goto('https://www.bilibili.com');
    
    // 添加控制台监听事件，获得浏览器控制台输出
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    // 输出当前网站地址
    await page.evaluate(() => console.log(`url is ${location.href}`));

   

    await page.screenshot({
        path: 'example.png'
    });

    await page.evaluate(() => {debugger;});
    await browser.close();
})();