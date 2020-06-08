const form = document.querySelector("#signup-form");
const creditCard = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#options");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  console.log("cc", creditCard.value);
  console.log("terms", termsCheckbox.checked);
  console.log("veggieSelect", veggieSelect.value);
  alert("SUBMITTED THE FORM!");
});

const formData = {};
// input event updates on each keypress
// for(let input of [creditCard, termsCheckbox, veggieSelect]) {
//   input.addEventListener("input", ({ target }) => {
//     const {name, type, value, checked} = target;
//     formData[name] = type === "checkbox" ? checked : value;
//   });
// }

// change event doesn't update creditcard until the input isn't in focus
for(let input of [creditCard, termsCheckbox, veggieSelect]) {
  input.addEventListener("change", ({ target }) => {
    const {name, type, value, checked} = target;
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);
  });
}

// creditCard.addEventListener("input", (evt) => {
//   console.log("Input changed");
//   formData["cc"] = evt.target.value;
// });

// veggieSelect.addEventListener("input", (evt) => {
//   console.log("VEGGIE!!!", evt);
//   formData["veggie"] = evt.target.value;
// });

// termsCheckbox.addEventListener("input", (evt) => {
//   console.log("CHECKED!", evt);
//   formData["agreeToTerms"] = evt.target.checked;
// });