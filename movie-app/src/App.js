import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

function App(){
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () =>{
    const apiKey = process.env.React_APP_TMDB_API_KEY;
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}';

    try{
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results || []);
  }
  catch(error) {
    console.error('Error fetching movies:', error);
  }
};
return (
  <div className='App'>
    <h1>Movie Explorer</h1>
    <SearchBar query={query} setQuery={setQuery}
    handleSearch={fetchMovies}/>
  </div>
);
}

  

export default App;
