const Brain = require("brain.js");

let net = new Brain.NeuralNetwork({ hiddenLayers: [2] , activation: "tanh" });

const data = [
  { input: [0], output: [1] },
  { input: [1], output: [0] },

];

net.train(data, {
  log(info) {
    console.log(info);
  },
  logPeriod: 50
});

console.log(net.run([0]));
console.log(net.run([1]));
