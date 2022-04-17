const API_URL = 'https://api.themoviedb.org/3/';
const API_COMMENT_URL = 'http://localhost:5010/api/Comments';
const API_REGISTER_URL = 'http://localhost:5010/api/Authorization';
const API_KEY = process.env.REACT_APP_API_KEY;



const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const LATEST_BASE_URL = `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US`;
const TOP_RATED_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const URL_BY_GENRES_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
const GENRES_BASE_URL = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
const SELECTION_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=`;



const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';


export {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    LATEST_BASE_URL,
    TOP_RATED_BASE_URL,
    URL_BY_GENRES_BASE_URL,
    GENRES_BASE_URL,
    SELECTION_BASE_URL,
    API_URL,
    API_COMMENT_URL,
    API_REGISTER_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
};
