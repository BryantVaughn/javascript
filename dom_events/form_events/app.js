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

