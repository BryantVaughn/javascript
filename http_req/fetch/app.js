fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if(!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const filmUrl = data.results[0].films[0];
    return fetch(filmUrl);
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json();
  })
  .then((filmData) => {
    console.log(filmData);
  })
  .catch((error) => {
    console.log("SOMETHING WENT WRONG", error);
  });