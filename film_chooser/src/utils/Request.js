import axios from "axios";

async function getMovies() {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D",
    headers: {
      "X-RapidAPI-Key": "fe9eda3c24msh78f980a0ccde7d2p1c0087jsnd823f861de36",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
}

export default getMovies;
