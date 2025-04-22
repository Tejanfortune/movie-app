
import { useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from '../../config';

export const useHomeFetch = (searchTerm) => {
  const [state, setState] = useState({
    movies: [],
    heroImage: null,
    currentPage: 0,
    totalPages: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();

      // Safety check for malformed API responses
      if (!result.results || !Array.isArray(result.results)) {
        throw new Error("result.results is not an array");
      }

      setState(prev => ({
        ...prev,
        movies:
          endpoint.includes('page') && !endpoint.includes('search')
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
    } catch (error) {
      console.error('Fetch Movies Error:', error);
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(searchTerm ? `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchTerm}` : POPULAR_BASE_URL);
  }, [searchTerm]);

  return [{ state, loading, error }, fetchMovies];
};
