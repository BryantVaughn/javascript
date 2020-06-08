const colors = ["red", "orange", "yellow", "green", "blue", "purple", "indigo", "violet"];

const changeColor = function(evt) {
  console.log(evt);
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");

for(let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", changeColor);
}

// document.body.addEventListener("keypress", function(evt) {
//   console.log(evt);
// });

const input = document.querySelector("#username");
// fires with any keypress including non-input changing keys
input.addEventListener("keydown", function(evt) {
  console.log("KEY DOWN!");
});
// fires with any keypress including non-input changing keys
input.addEventListener("keyup", function(evt) {
  console.log("KEY UP!");
});
// only fires if key causes change in input, plus return
input.addEventListener("keypress", function(evt) {
  console.log(evt);
});

const foodInput = document.querySelector("#food-item")
const ulItems = document.querySelector("#list-items");

foodInput.addEventListener("keypress", function(evt) {
  if(evt.key === "Enter") {
    if(!this.value) return;
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    ulItems.appendChild(newItem);
    this.value = "";
  }
});