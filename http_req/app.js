const myReq = new XMLHttpRequest();

myReq.onload = function() {
  const data = JSON.parse(this.responseText);
  const filmUrl = data.results[0].films[0];
  const filmRequest = new XMLHttpRequest();
  filmRequest.addEventListener("load", function() {
    const filmData = JSON.parse(this.responseText);
    console.log(filmData.title);
  });
  filmRequest.addEventListener("error", function(err) {
    console.log("ERROR!!!", err);
  });
  filmRequest.open("get", filmUrl, true);
  filmRequest.setRequestHeader("Accept", "application/json");
  filmRequest.send();
  // for(let planet of data.results) {
  //   const {name, diameter, climate} = planet;
  //   console.log(`${name} has a diameter of ${diameter} and the climate is ${climate}.`);
  // }
};
myReq.onerror = function(err) {
  console.log("ERROR!", err);
};

myReq.open("get", "http://swapi.dev/api/planets", true);
myReq.setRequestHeader("Accept", "application/json");
myReq.send();