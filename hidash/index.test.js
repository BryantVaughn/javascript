const assert = require("assert").strict;
const { forEach, map } = require("./index");

// const test = (desc, fn) => {
//   console.log("----", desc);
//   try {
//     fn();
//   }
//   catch (err) {
//     console.log(err.message);
//   }
// };

it("The forEach function", () => {
  let sum = 0;
  forEach([1,2,3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6);
});

it("The map function", () => {
  const result = map([1,2,3], value => {
    return value * 2;
  });

  assert.deepStrictEqual(result, [2,4,6]);
});
