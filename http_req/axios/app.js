// axios
//   .get("https://swapi.dev/api/planets")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Helpers
const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  const { results, next } = data;
  console.log(`Loaded ${results.length} Planets`);
  for(let planet of results) {
    console.log(planet.name);
  }
  return Promise.resolve(next);
};

// Rewrite of fetch Star Wars API requests
fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log("SOMETHING WENT WRONG", err);
  });