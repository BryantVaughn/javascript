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