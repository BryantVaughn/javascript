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