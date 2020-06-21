// // node wraps files into function with 5 arguments
// console.log(arguments);

// // require
// console.log(require);

// // module
// console.log(module);

// // filename
// console.log(__filename);

// requiring a file updates the Require Cache
// If we require a file for a second time, node will
// pull the execution value from the Require Cache
const counterObj = require("./myscript");

console.log(counterObj.getCounter());
counterObj.incrementCounter();
console.log(counterObj.getCounter());

const newCounterObj = require("./myscript");

console.log(newCounterObj.getCounter());
console.log(counterObj.message);
