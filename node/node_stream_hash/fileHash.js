var crypto = require('crypto');
var fs = require('fs');

// var rs = fs.createReadStream('./nimei.txt');
// 大文件测试，ubuntu18.10镜像，几秒钟就完成了
var rs = fs.createReadStream('./ubuntu.iso');

var hash = crypto.createHash('sha512');
// 此处使用了函数的bind方法，bind方法会生成一个以当前函数为原型进行包装的函数并返回该函数，第一个参数为生成的函数里this的指向，会在生成的函数内调用this.当前函数()。
// rs.on('data', hash.update.bind(hash));
// 上面方法与下面方法结果一致
rs.on('data',(data)=>{
  hash.update(data);
})

rs.on('end', function (data) {  
  console.log(hash.digest('base64'));
});

//正确的拼接buffer的结果和流式结果一致，故使用流式
// var dataArray=[]
// var length=0
// rs.on('data',(data)=>{
//   dataArray.push(data)
//   length+=data.length
// })

// rs.on('end', function () {
//   let buf=Buffer.concat(dataArray,length)
//   hash.update(buf.toString())
//   console.log(hash.digest('base64'));
// });