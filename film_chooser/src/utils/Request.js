import axios from "axios";

async function getMovies(side, date) {
  const options = {
    method: "GET",
    url: `http://www.omdbapi.com/?s=${side}&type=movie&y=${date}&apikey=5f04c36c`,
    headers: {
      "Content-type": "Application/json",
    },
  };

  try {
    const response = await axios.request(options);
    const data = await response.data.Search;
    return data;
  } catch (error) {
    return error;
  }
}

export default getMovies;
