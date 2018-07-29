"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// 引入一些需要用到的库以及一些声明
var puppeteer = require("puppeteer"); // 引入Puppeteer
var chalk_1 = require("chalk"); // 一个美化 console 输出的库
var log = console.log; // 缩写 console.log
var TOTAL_PAGE = 50; // 定义需要爬取的网页数量，对应页面下部的跳转链接
// 格式化的进度输出 用来显示当前爬取的进度
function formatProgress(current) {
    var percent = (current / TOTAL_PAGE) * 100;
    var done = ~~(current / TOTAL_PAGE * 40);
    var left = 40 - done;
    var str = "\u5F53\u524D\u8FDB\u5EA6\uFF1A " + percent + "%";
    return str;
}
// 因为我们需要用到大量的 await 语句，因此在外层包裹一个 async function
main();
// 进入代码的主逻辑
function main() {
    return __awaiter(this, void 0, void 0, function () {
        // 这是一个在内部声明的函数，之所以在内部声明而不是外部，是因为在内部可以获取相关的上下文信息，如果在外部声明我还要传入 page 这个对象
        function handleData() {
            return __awaiter(this, void 0, void 0, function () {
                var list;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, page_1.evaluate(function () {
                                // 先声明一个用于存储爬取数据的数组
                                var writeDataList = [];
                                // 获取到所有的商品元素
                                var itemList = document.querySelectorAll('.item.J_MouserOnverReq');
                                // 遍历每一个元素，整理需要爬取的数据
                                for (var _i = 0, itemList_1 = itemList; _i < itemList_1.length; _i++) {
                                    var item = itemList_1[_i];
                                    // 首先声明一个爬取的数据结构
                                    var writeData = {
                                        picture: undefined,
                                        link: undefined,
                                        title: undefined,
                                        price: undefined
                                    };
                                    // 找到商品图片的地址
                                    var img = item.querySelector('img');
                                    writeData.picture = img.src;
                                    // 找到商品的链接
                                    var link = item.querySelector('.pic-link.J_ClickStat.J_ItemPicA');
                                    writeData.link = link.href;
                                    // 找到商品的价格，默认是string类型 通过~~转换为整数number类型
                                    var price = item.querySelector('strong');
                                    writeData.price = ~~price.innerText;
                                    // 找到商品的标题，淘宝的商品标题有高亮效果，里面有很多的span标签，不过一样可以通过innerText获取文本信息
                                    var title = item.querySelector('.title>a');
                                    writeData.title = title.innerText;
                                    // 将这个标签页的数据push进刚才声明的结果数组
                                    writeDataList.push(writeData);
                                }
                                // 当前页面所有的返回给外部环境
                                return writeDataList;
                            })
                            // 得到数据以后写入到mongodb
                            //   const result = await mongo.insertMany('GTX1080', list)
                        ];
                        case 1:
                            list = _a.sent();
                            // 得到数据以后写入到mongodb
                            //   const result = await mongo.insertMany('GTX1080', list)
                            console.log(list);
                            log(chalk_1["default"].yellow('写入数据库完毕'));
                            return [2 /*return*/];
                    }
                });
            });
        }
        var browser, page_1, i, pageInput, submit, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer.launch({
                        headless: false,
                        slowMo: 100,
                        devtools: true
                    })];
                case 1:
                    browser = _a.sent();
                    log(chalk_1["default"].green('服务正常启动'));
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 16, 18, 19]);
                    return [4 /*yield*/, browser.newPage()
                        // 监听页面内部的console消息
                    ];
                case 3:
                    page_1 = _a.sent();
                    // 监听页面内部的console消息
                    page_1.on('console', function (msg) {
                        if (typeof msg === 'object') {
                            console.dir(msg);
                        }
                        else {
                            log(chalk_1["default"].blue(msg));
                        }
                    });
                    // 打开我们刚刚看见的淘宝页面
                    return [4 /*yield*/, page_1.goto('https://s.taobao.com/search?q=gtx1080&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20180416&ie=utf8')];
                case 4:
                    // 打开我们刚刚看见的淘宝页面
                    _a.sent();
                    log(chalk_1["default"].yellow('页面初次加载完毕'));
                    i = 1;
                    _a.label = 5;
                case 5:
                    if (!(i <= TOTAL_PAGE)) return [3 /*break*/, 14];
                    return [4 /*yield*/, page_1.$(".J_Input[type='number']")];
                case 6:
                    pageInput = _a.sent();
                    return [4 /*yield*/, page_1.$('.J_Submit')
                        // 模拟输入要跳转的页数
                    ];
                case 7:
                    submit = _a.sent();
                    // 模拟输入要跳转的页数
                    return [4 /*yield*/, pageInput.type('' + i)
                        // 模拟点击跳转
                    ];
                case 8:
                    // 模拟输入要跳转的页数
                    _a.sent();
                    // 模拟点击跳转
                    return [4 /*yield*/, submit.click()
                        // 等待页面加载完毕，这里设置的是固定的时间间隔，之前使用过page.waitForNavigation()，但是因为等待的时间过久导致报错（Puppeteer默认的请求超时是30s,可以修改）,因为这个页面总有一些不需要的资源要加载，而我的网络最近日了狗，会导致超时，因此我设定等待2.5s就够了
                    ];
                case 9:
                    // 模拟点击跳转
                    _a.sent();
                    // 等待页面加载完毕，这里设置的是固定的时间间隔，之前使用过page.waitForNavigation()，但是因为等待的时间过久导致报错（Puppeteer默认的请求超时是30s,可以修改）,因为这个页面总有一些不需要的资源要加载，而我的网络最近日了狗，会导致超时，因此我设定等待2.5s就够了
                    return [4 /*yield*/, page_1.waitFor(2500)
                        // 清除当前的控制台信息
                    ];
                case 10:
                    // 等待页面加载完毕，这里设置的是固定的时间间隔，之前使用过page.waitForNavigation()，但是因为等待的时间过久导致报错（Puppeteer默认的请求超时是30s,可以修改）,因为这个页面总有一些不需要的资源要加载，而我的网络最近日了狗，会导致超时，因此我设定等待2.5s就够了
                    _a.sent();
                    // 清除当前的控制台信息
                    console.clear();
                    // 打印当前的爬取进度
                    log(chalk_1["default"].yellow(formatProgress(i)));
                    log(chalk_1["default"].yellow('页面数据加载完毕'));
                    // 处理数据，这个函数的实现在下面
                    return [4 /*yield*/, handleData()
                        // 一个页面爬取完毕以后稍微歇歇，不然太快淘宝会把你当成机器人弹出验证码（虽然我们本来就是机器人）
                    ];
                case 11:
                    // 处理数据，这个函数的实现在下面
                    _a.sent();
                    // 一个页面爬取完毕以后稍微歇歇，不然太快淘宝会把你当成机器人弹出验证码（虽然我们本来就是机器人）
                    return [4 /*yield*/, page_1.waitFor(2500)];
                case 12:
                    // 一个页面爬取完毕以后稍微歇歇，不然太快淘宝会把你当成机器人弹出验证码（虽然我们本来就是机器人）
                    _a.sent();
                    _a.label = 13;
                case 13:
                    i++;
                    return [3 /*break*/, 5];
                case 14: 
                // 所有的数据爬取完毕后关闭浏览器
                return [4 /*yield*/, browser.close()];
                case 15:
                    // 所有的数据爬取完毕后关闭浏览器
                    _a.sent();
                    log(chalk_1["default"].green('服务正常结束'));
                    return [3 /*break*/, 19];
                case 16:
                    error_1 = _a.sent();
                    // 出现任何错误，打印错误消息并且关闭浏览器
                    console.log(error_1);
                    log(chalk_1["default"].red('服务意外终止'));
                    return [4 /*yield*/, browser.close()];
                case 17:
                    _a.sent();
                    return [3 /*break*/, 19];
                case 18:
                    // 最后要退出进程
                    process.exit(0);
                    return [7 /*endfinally*/];
                case 19: return [2 /*return*/];
            }
        });
    });
}
