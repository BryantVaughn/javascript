// getElementById()

const img = document.getElementById("bear-photo");
const p = document.getElementById("main");

console.dir(img);
console.dir(p);

// getElementsByTagName()

const inputs = document.getElementsByTagName("input");
const items = document.getElementsByTagName("li");

console.dir(inputs);
console.dir(items);

// getElementsByClassName()

const header = document.getElementsByClassName("header");
const special = document.getElementsByClassName("special");

// grab only the li's with class of special
const ul = document.getElementsByTagName("ul")[0];
console.log(ul.getElementsByClassName("special"));

console.dir(header);
console.dir(special);

// querySelector() & querySelectorAll()

// select by tag
const h1 = document.querySelector("h1");
const firstInput = document.querySelector("input");
// select by id
const bearPhoto = document.querySelector("#bear-photo");
// select by class
const firstSpecial = document.querySelector(".special");
const firstSpecialLi = document.querySelector("li.special");
const peasLi = document.querySelector("section li.special");
const allSpecialLis = document.querySelectorAll("li.special");

// innerText & textContent

const bodyText = document.body.innerText;

// innerHTML

const form = document.querySelector("form");
console.log(form.innerHTML);

const ul2 = document.querySelector("ul");
console.log(ul2.innerHTML);

const inputs2 = document.querySelectorAll("input");

// using value, src, href, and more
const a = document.querySelector("a");
const bearImg = document.querySelector("img");

// getting and setting attributes
const range = document.querySelector("input[type='range']");
// select the max attribute and change the value
range.setAttribute("max", "1000");

// parent/children/siblings
// const firstLi = document.querySelector("li");
// const parentOfLi = firstLi.parentElement;

// // accessing child elements
// const ul3 = document.querySelector("ul");
// const children = ul3.children;
// children[0].setAttribute("class", "super-special");

// // accessing sibling elements
// const secondLi = firstLi.nextElementSibling;
// const thirdLi = secondLi.nextElementSibling;
// const backToSecondLi = thirdLi.previousElementSibling;

const allLis = document.querySelectorAll("li");

// for(let i = 0; i < allLis.length; i++) {
//   allLis[i].innerText = "WE ARE THE CHAMPIONS!";
// }
// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// allLis.forEach((el, idx) => {
//   el.style.color = colors[idx];
// });

// h1.style.color = "orchid";
// p.style.color = "white";
// p.style.backgroundColor = "black";

const todo = document.querySelector("#todos .todo");
// todo.style.color = "rgba(100,100,100,0.5)";
// todo.style.textDecoration = "line-through";
todo.classList.add("done");
todo.classList.toggle("done");

// adding elements

const h2 = document.createElement("h2");
h2.innerText = "I like animals.";
h2.classList.add("special");

const section = document.querySelector("section");
section.appendChild(h2);

const newImg = document.createElement("img");
newImg.src = "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80";
newImg.id = "squirrel-photo";

h1.appendChild(newImg);

const newLink = document.createElement("a");
newLink.innerText = "Mr. Budz Video! CLICK MEEE";
newLink.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";
newLink.target = "_blank";

const firstP = document.querySelector("p");
firstP.appendChild(newLink);