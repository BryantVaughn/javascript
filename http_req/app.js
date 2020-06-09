const myReq = new XMLHttpRequest();

myReq.onload = function() {
  const data = JSON.parse(this.responseText);
  // for(let i = 0; i < data.results.length; i++) {
  //   const {name, diameter, climate} = data.results[i];
  //   console.log(`${name} has a diameter of ${diameter} and the climate is ${climate}.`);
  // }
  for(let planet of data.results) {
    const {name, diameter, climate} = planet;
    console.log(`${name} has a diameter of ${diameter} and the climate is ${climate}.`);
  }
};
myReq.onerror = function(err) {
  console.log("ERROR!", err);
};

myReq.open("get", "http://swapi.dev/api/planets", true);
myReq.setRequestHeader("Accept", "application/json");
myReq.send();