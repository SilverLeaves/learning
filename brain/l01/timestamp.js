// Count to 5
// 1-5, 5-1
const Brain = require("brain.js");
const trainingData = [
    [1,2,3,4,5],
    [5,4,3,2,1]
];

const net = new Brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([1,2,3,4]));
console.log(net.run([5,4,3,2]));
console.log(net.run([10,9,8,7]));