document.querySelector("form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  const input = document.querySelector("input");
  console.log(input.value);
});