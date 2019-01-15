const Brain = require("brain.js");

let net = new Brain.NeuralNetwork({ hiddenLayers: [2] });

const data = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

net.train(data, {
  log(info) {
    console.log(info);
  },
  logPeriod: 1000
});

console.log(net.run([0, 0]));
console.log(net.run([0, 1]));
console.log(net.run([1, 0]));
console.log(net.run([1, 1]));
