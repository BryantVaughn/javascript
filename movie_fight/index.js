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

let timeoutId;
const onInput = (evt) => {
  // stop timer if user still typing
  if(timeoutId) clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    fetchData(evt.target.value);
  }, 500);
};

input.addEventListener("input", onInput);