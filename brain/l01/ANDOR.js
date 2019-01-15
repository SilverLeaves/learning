const Brain = require("brain.js");

let net = new Brain.NeuralNetwork({ hiddenLayers: [2], activation: "tanh" });

const data = [
  {
    input: [0, 0],
    output: {
      AND: 0,
      OR: 0
    }
  },
  {
    input: [0, 1],
    output: {
      AND: 0,
      OR: 1
    }
  },
  {
    input: [1, 0],
    output: {
      AND: 0,
      OR: 1
    }
  },
  {
    input: [1, 1],
    output: {
      AND: 1,
      OR: 1
    }
  }
];

net.train(data, {
  log(info) {
    console.log(info);
  },
  logPeriod: 1
});

console.log("测试");

console.log(net.run([0, 0]));
console.log(net.run([0, 1]));
console.log(net.run([1, 0]));
console.log(net.run([1, 1]));
