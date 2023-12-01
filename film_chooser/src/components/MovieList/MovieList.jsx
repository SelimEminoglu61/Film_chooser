import { useEffect, useState } from "react";
import getMovies from "../../utils/Request";
import "./styleMovieList.scss";
import "../../pages/HomePage/styleHomePage.scss";

function MovieList() {
  const [movieArr, setMovieArr] = useState([]);

  return (
    <div className="container">
      <div className="movieListDiv">
        <h2>Movies</h2>
        <div className="listDiv"></div>
      </div>
    </div>
  );
}

export default MovieList;
