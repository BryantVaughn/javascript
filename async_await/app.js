// function greet() {
//   return "HELLO!!!";
// }

// async function greet() {
//   return "HELLO!!!";
// }

// greet().then((val) => {
//   console.log("Promise resolved with:", val);
// });

// async function add(x, y) {
//   if(typeof x !== "number" || typeof y !== "number") {
//     throw "X and Y must be numbers!";
//   }
//   return x + y;
// }

// add('e', 'r')
//   .then((val) => {
//     console.log("Promise resolved with:", val);
//   })
//   .catch((err) => {
//     console.log("Promise rejected with:", err);
//   });

// function getPlanets() {
//   return axios.get("https://swapi.dev/api/planets/");
// }

// getPlanets().then((res) => {
//   console.log(res.data);
// });

async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets/");
  console.log(res.data);
}

getPlanets();