const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "1ba7eb86",
      s: searchTerm
    }
  });

  console.log(response.data);
}

const input = document.querySelector("input");

const debounce = (func, delay=1000) => {
  let timeoutId;
  return (...args) => {
    // stop timer if user still typing
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = debounce(evt => {
  fetchData(evt.target.value);
}, 500);

input.addEventListener("input", onInput);