const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "1ba7eb86",
      s: "avengers"
    }
  });

  console.log(response.data);
}

fetchData();