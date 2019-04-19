import * as Brain from "brain.js";

// 生成一组随机数
function getRandomArray(col: number = 10) {
  let randomArray = [];
  for (let index = 0; index < col; index++) {
    const result = Math.round(Math.random());
    randomArray.push(result);
  }
  return randomArray;
}

// 生成训练数据
function getRandomData(row: number = 10, col: number = 10) {
  let data = [];
  for (let index = 0; index < row; index++) {
    const result = getRandomArray(col);
    data.push({
      input: result.slice(0, result.length - 2),
      output: result.slice(result.length - 2, result.length - 1)
    });
  }
  return data;
}

// 测试训练结果
function test(data: any[], net: Brain.NeuralNetwork) {
  let correct = 0;
  data.forEach(element => {
    let result = Math.round(net.run(element.input)[0]);

    if (result == element.output[0]) {
      correct++;
    }
  });
  return {
    winRate: correct / data.length,
    correct,
    total: data.length
  };
}

// 创建一个神经网络
let net = new Brain.NeuralNetwork({ hiddenLayers: [9, 8, 7, 6, 5, 4] });

// 创建训练数据集和测试数据集
const trainData = getRandomData(200);
const testData = getRandomData(1000000);

// 训练
net.train(trainData, {
  log(info) {
    console.log(info);
  },
  logPeriod: 1000
});

// 测试
const result = test(testData, net);
console.log("测试结果", result);
