const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if(elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      }
      else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

const btn = document.querySelector("button");
// async function animateRight(el) {
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   moveX(el, 100, 1000);
// }
// animateRight(btn).catch(({ bodyBoundary, elRight, amount }) => {
//   console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
//   console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
// });

// const btn = document.querySelector("button");
// moveX(btn, 250, 1000)
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .then(() => moveX(btn, 250, 1000))
//   .catch(({ bodyBoundary, elRight, amount }) => {
//     console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
//     console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
//   });


// Sequential Requests!
// async function get3Pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/4");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/7");
//   console.log(poke1.data.name);
//   console.log(poke2.data.name);
//   console.log(poke3.data.name);
// }

const capitalize = (str) => {
  if(typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const printPokemon = (results) => {
  for(let pokemon of results) {
    console.log(capitalize(pokemon.data.name));
  }
};

async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/4");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/7");
  // const poke1 = await prom1; // prom1 is the promise since await was not used above
  // const poke2 = await prom2; // prom2 is the promise since await was not used above
  // const poke3 = await prom3; // prom3 is the promise since await was not used above
  const results = await Promise.all([ prom1, prom2, prom3 ]);
  // above waits for all promises to resolve before running below code
  printPokemon(results);
}

get3Pokemon();

function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

// in sequence
// async function lightShow() {
//   await changeBodyColor("teal", 1000);
//   await changeBodyColor("pink", 1000);
//   await changeBodyColor("orange", 1000);
//   await changeBodyColor("purple", 1000);
// }

async function lightShow() {
  const p1 = changeBodyColor("teal", 1000);
  const p2 = changeBodyColor("pink", 1000);
  const p3 = changeBodyColor("orange", 1000);
  const p4 = changeBodyColor("purple", 1000);
  const results = await Promise.all([ p1, p2, p3, p4 ]);
  // await p1;
  // await p2;
  // await p3;
  // await p4;
}

lightShow();