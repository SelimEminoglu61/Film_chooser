import { useEffect, useState } from "react";
import getMovies from "../../utils/Request";
import "./styleMovieList.scss";
import "../../pages/HomePage/styleHomePage.scss";

function MovieList() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    setMovieArr(getMovies("Hope", 2023));
  }, []);
  return (
    <div className="container">
      <div className="movieListDiv">
        <h2>Movies</h2>
        <div className="listDiv">{console.log(movieArr.data)}</div>
      </div>
    </div>
  );
}

export default MovieList;
