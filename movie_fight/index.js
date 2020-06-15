const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "1ba7eb86",
      s: searchTerm
    }
  });

  return response.data.Search;
}

const input = document.querySelector("input");

const onInput = debounce(async evt => {
  const movies = await fetchData(evt.target.value);
  console.log(movies);
}, 500);

input.addEventListener("input", onInput);