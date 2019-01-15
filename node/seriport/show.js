const SerialPort = require("serialport");

async function getList() {
  let list = await SerialPort.list();
  console.log("serial port list", list);
}

getList();
