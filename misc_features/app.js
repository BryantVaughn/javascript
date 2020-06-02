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

// Spread

const giveMeFour = (a, b, c, d) => {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
};

const colors = ["red", "yellow", "orange", "green"];

const str = "GOAT";

const cephalopods = ["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"];
const gastropods = ["giant african snail", "banana slug", "variable neon slug"];
const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods];
const inverts = [...cnidaria, ...gastropods, ...cephalopods];

const feline = {
  legs: 4,
  family: "Felidae"
};

const canine = {
  family: "Caninae",
  furry: true
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable"
};

const catDog = {
  ...canine,
  ...feline
};

const catDogClone = {
  ...catDog
};