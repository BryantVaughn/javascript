const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "1ba7eb86",
      s: searchTerm
    }
  });

  if (response.data.Error) return [];
  return response.data.Search;
}

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector(".input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = debounce(async evt => {
  const movies = await fetchData(evt.target.value);
  
  for (let movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;

    document.querySelector("#target").appendChild(div);
  }
}, 500);

input.addEventListener("input", onInput);