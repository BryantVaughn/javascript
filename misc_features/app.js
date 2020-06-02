// Default Parameters

// old way for empty parameters
function multiply(x, y) {
  if(typeof(y) === "undefined") y = 1;
  return x * y;
}

// new way
function newMultiply(x, y=1) {
  return x * y;
}

const greet = (person, greeting="Hi") => {
  console.log(`${greeting} ${person}`);
};

const blah = (x, y=[1,2,3]) => {
  console.log(x, y);
};