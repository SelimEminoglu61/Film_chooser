import "./styleSearchMovie.scss";
import "../../pages/HomePage/styleHomePage.scss";

function SearchMovie() {
  return (
    <div className="container">
      <div className="searchDiv">
        <h2>Search Movie</h2>
        <input placeholder="Type movie name" className="searchInput" />
        <input type="submit" className="submitMovie" />
      </div>
    </div>
  );
}

export default SearchMovie;
