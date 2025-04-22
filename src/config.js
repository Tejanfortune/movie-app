// Configuration for TMDB
// To see the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=b724a1a8e04e7fcc75347d22e2b2e88e
// Read more about the API here: https://developers.themoviedb.org/

// URL for and key used to build the end points for making api requests.
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b724a1a8e04e7fcc75347d22e2b2e88e';

//urls used for searching movies and popular movies//
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

//URLs used to fetch movie posters, images, backdrops etc, 
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original but w1280 is chosen and w500 for balance between size and quality
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, SEARCH_BASE_URL, POPULAR_BASE_URL };
