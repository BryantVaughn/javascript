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

// Rest

// old way with arguments object
function sum() {
  const argsArray = [...arguments];
  return argsArray.reduce((total, val) => {
    return total + val;
  });
}

// new way with rest
const sumAll = (...nums) => {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
};

const fullName = (first, last, ...titles) => {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}

const multiplyAll = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
);

// Destructuring

const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward"
];

// old way
const gold = raceResults[0];
const silver = raceResults[1];
const bronze = raceResults[2];

// new way with destructuring
const [gold, silver, bronze] = raceResults;
// skip some results
const [first,,,fourth] = raceResults;
// use rest to collect others
const [winner, ...others] = raceResults;

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
};

const {first: firstName, last: lastName} = runner;

const {
  country: nation,
  title: honorific
} = runner;

const {first: firstName, last: lastName, ...others} = runner;

const results = [{
    first: "Eluid",
    last: "Kipchoge",
    country: "Kenya"
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia"
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States"
  }
];

const [{first: goldWinner}, {country}] = results;

const [, silverMedal] = results;
const {country: nation} = silverMedal;

const print = ({first, last, title}) => {
  console.log(`${first} ${last}, ${title}`);
};