import axios from "axios";

async function searchMovie(searchWord) {
  const options = {
    method: "GET",
    url: `http://www.omdbapi.com/?apikey=5f04c36c&t=${searchWord}`,
    headers: {
      "content-type": "application/json",
    },
  };
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    return error;
  }
}

export default searchMovie;
