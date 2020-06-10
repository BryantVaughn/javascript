// helper functions
const checkStatus = (response) => {
  if(!response.ok) {
    throw new Error(`Status Code Error: ${response.status}`);
  }
  return response.json();
};

const printPlanets = (data) => {
  console.log(`Loaded ${data.results.length} Planets`);
  for(let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatus)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatus)
  .then(printPlanets)
  .catch((error) => {
    console.log("SOMETHING WENT WRONG", error);
  });