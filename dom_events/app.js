// the thing        event type        the code to run
//--------------------------------------------------------------
// button             click             change the color
// input              hits return       get search results
// image              mouseover         display the img caption

// This only allows a single click listener when not using addEventListener

// const clicker = document.querySelector("#clicker");

// clicker.onclick = () => {
//   console.log("YOU CLICKED THE CLICKER!!!");
// };

// clicker.ondblclick = () => {
//   console.log("YOU DOUBLE CLICKED THE CLICKER!!!!!!!");
// };
// const btn = document.querySelector("button");
// btn.onclick = () => {
//   console.log("YOU CLICKED ME!");
// };

// addEventListener allows multiple of the same event on one element

const btn = document.querySelector("button");
btn.addEventListener("click", function() {
  alert("CLICKED!!!");
});

btn.addEventListener("click", function() {
  console.log("Second thing");
});

btn.addEventListener("mouseover", function() {
  btn.innerText = "STOP TOUCHING ME!";
});

btn.addEventListener("mouseout", function() {
  btn.innerText = "Click Me";
});