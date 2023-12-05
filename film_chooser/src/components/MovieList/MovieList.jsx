import { useEffect, useState } from "react";
import getMovies from "../../utils/Request";
import "./styleMovieList.scss";
import "../../pages/HomePage/styleHomePage.scss";

function MovieList() {
  const [movieArr, setMovieArr] = useState([]);
  const [movieArr2, setMovieArr2] = useState([]);
  const [movieError, setMovieError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies("Hope", "2023");
        const data2 = await getMovies("Justice", "2023");
        setMovieArr(data);
        setMovieArr2(data2);
      } catch (error) {
        setMovieError(true);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="movieListDiv">
        {movieError && <div>Movies can't loaded</div>}
        <h3 id="hope">Hope Movies</h3>
        <div className="row">
          <div className="moviesDiv">
            {movieArr.map((movie) => (
              <img
                key={movie.imdbID}
                src={
                  movie.Poster != "N/A" ? movie.Poster : "/images/bos_film.jpg"
                }
                alt="movie"
                className="moviePoster"
              />
            ))}
          </div>
        </div>
        <h3 id="justice">Justice Movies</h3>
        <div className="row">
          <div className="moviesDiv">
            {movieArr2.map((movie) => (
              <img
                key={movie.imdbID}
                src={
                  movie.Poster != "N/A" ? movie.Poster : "/images/bos_film.jpg"
                }
                alt="movie"
                className="moviePoster"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
