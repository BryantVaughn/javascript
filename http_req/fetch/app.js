fetch("https://swapi.dev/api/planets21/")
  .then((response) => {
    if(!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    }
    response.json().then((data) => {
      for(let planet of data.results) {
        console.log(planet.name);
      }
    });
  })
  .catch((error) => {
    console.log("SOMETHING WENT WRONG", error);
  });