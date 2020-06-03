// Shorthand Properties

// old way
const getStatsOld = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, val) => sum + val);
  const avg = sum / arr.length;
  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg
  };
};

// new way with shorthand properties
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, val) => sum + val);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

// Computed Properties

const role = "host";
const person = "Jools Holland";

const role2 = "Director";
const person2 = "James Cameron";

// old way
const oldTeam = {};
oldTeam[role] = person;
oldTeam[role2] = person2;

// new way with computed properties
const team = {
  [role]: person,
  [role2]: person2
};

// const addProp = (obj, k, v) => {
//   const copy = {
//     ...obj
//   };
//   copy[k] = v;
//   return copy;
// };

const addProp = (obj, k, v) => ({...obj, [k]: v});

const res = addProp(team, "happy", ":)");

// Object Functions or Methods

// const add = (x, y) => x + y;

const math = {
  add(x,y) {
    return x + y;
  },
  multiply(x,y) {
    return x * y;
  }
};

const auth = {
  username: "TommyBot",
  login() {
    console.log("LOGGED YOU IN!");
  },
  logout() {
    console.log("LOGGED YOU OUT!");
  }
};

// Keyword This

// intro showing functions are added to window object
function sayHi() {
  console.log("HI!");
  console.log(this);
}

const celeb = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    const {first, last, nickName} = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  }
};

// this is a representation of how it is used...
// celeb.printBio(): this refers to celeb object
// const printBio = celeb.printBio: this would refer to window
// arrow functions don't get their own this and it will refer to the window

const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    const {phrases} = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log("PHEW THANK HEAVENS THAT IS OVER!");
  }
}
