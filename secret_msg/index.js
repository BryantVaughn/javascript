document.querySelector("form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});