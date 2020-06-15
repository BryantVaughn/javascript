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

const onInput = debounce(evt => {
  fetchData(evt.target.value);
}, 500);

input.addEventListener("input", onInput);