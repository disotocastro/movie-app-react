import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';


import SearchIcon from './search.svg'

// 8180a5d2
const API_URL = 'http://www.omdbapi.com?apikey=8180a5d2'

const movie1 = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

function App() {

  const [movies, setMovies] = useState([]);
  // [] = default value;


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    // Function to fech the movies

    searchMovies('Spiderman');

  }, []);


  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder='search for movies'
          value='Superman'
          type="text"
          onChange={() => { }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => { }}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>
          )
          : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;

