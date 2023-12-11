import { useState } from "react";
import searchMovie from "../../utils/SearchRequest";
import "./styleSearchMovie.scss";
import "../../pages/HomePage/styleHomePage.scss";

function SearchMovie() {
  const [searchWord, setSearchWord] = useState("");
  const [resultMovie, setResultMovie] = useState({});

  function SubmitForm() {
    const fetchResult = async () => {
      try {
        if (searchWord != null) {
          const data = searchMovie(searchWord);
          return data;
        }
        return "Please type movie name";
      } catch (err) {
        return err;
      }
    };
    fetchResult()
      .then((result) => setResultMovie(result))
      .catch((err) => setResultMovie(err));
  }

  return (
    <div className="container">
      <div className="searchDiv">
        <h2>Search Movie</h2>
        <form onSubmit={SubmitForm()}>
          <input
            placeholder="Type movie name"
            className="searchInput"
            onChange={(e) => setSearchWord(e.target.value)}
            value={searchWord}
          />
          <button type="submit" className="submitMovie">
            Search Movie
          </button>
        </form>
      </div>
      <div className="searchResult">
        <div className="resultDiv">
          <h3>Results:</h3>
          <div></div>
        </div>
        <div className="listsDiv">
          <h3>My Lists:</h3>
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
