//
const SerialPort = require("serialport");
const Delimiter = SerialPort.parsers.Delimiter;

// 默认参数
// const defaultSettings = Object.freeze({
//   autoOpen: true,
//   baudRate: 9600,
//   dataBits: 8,
//   hupcl: true,
//   lock: true,
//   parity: "none",
//   rtscts: false,
//   stopBits: 1,
//   xany: false,
//   xoff: false,
//   xon: false,
//   highWaterMark: 64 * 1024
// });

const port1 = new SerialPort("COM1", {
  // baudRate: 9600
});
const port2 = new SerialPort("COM2", {
  // baudRate: 9600
});

// ASCII 00 NUL(null) 	空字符 (与关键字null重叠)
// ASCII 04 EOT (end of transmission) 	传输结束
const parser1 = port2.pipe(new Delimiter({ delimiter: "\4" }));
const parser2 = port2.pipe(new Delimiter({ delimiter: "\4" }));

parser1.on("data", function(data) {
  console.log("串口1接收到:", data.toString());
});

parser2.on("data", function(data) {
  console.log("串口2接收到:", data.toString());
});

// 使用
// port1.on("data", function(data) {
//   console.log("串口1接收到:", data.toString());
// });
// port2.on("data", function(data) {
//   console.log("串口2接收到:", data.toString());
// });

let i = 0;

// 常规事件监听
port1.on("open", () => {
  console.log("串口COM1已经打开");
  setInterval(() => {
    port1.write(++i + " READY 1234 我擦，吃什么？吃屎哈？ \4");
  }, 500);
});
port2.on("open", () => {
  console.log("串口COM2已经打开");
});
port1.on("close", () => {
  console.log("串口COM1已经关闭");
});
port2.on("close", () => {
  console.log("串口COM2已经关闭");
});
