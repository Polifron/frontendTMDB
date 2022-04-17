import { useEffect, useState } from "react";
import API from "../API";
//helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres]=useState([]);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(false);

 
//  console.log(`selected genres: ${selectedGenres.map(genre => (genre.id))}`)
  
  const fetchMovies = async (page, searchTerm = "",selectedGenres) => {
    try {
      setError(false);
      setLoading(true);
      let movies = await API.fetchMovies(searchTerm, page);
      console.log(!searchTerm, !selectedGenres)
      if(!searchTerm && selectedGenres){
        
        movies =await API.fetchByGenres(selectedGenres, page);
      }

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));

     
    } catch (error) {
      setError(true);

      console.log(error);
    }
    setLoading(false);
  };
  
  //Initial render
  useEffect(() => {
  
    if (!searchTerm && !selectedGenres.length === 0) {
      const sessionState = isPersistedState('homeState');
      
      if (sessionState) {
        console.log('Grabbing from sessionStorage');
        setState(sessionState);
        return;
      }
    }
    console.log('Grabbing from API');
    setState(initialState);
    fetchMovies(1, searchTerm, selectedGenres);
    
  }, [searchTerm,selectedGenres]);


// Loading more
useEffect(() => {
  if (!isLoadingMore) return;
  fetchMovies(state.page + 1, searchTerm);
  setIsLoadingMore(false);
}, [isLoadingMore, searchTerm, state.page]);


// Set session storage
useEffect(() => {
  if (searchTerm.length=== 0 && selectedGenres.length === 0 && state.results.length > 0)
  sessionStorage.setItem('homeState', JSON.stringify(state));
  console.log(`state from setItem: ${state}`);
}, [searchTerm, selectedGenres, state]);

  return {
    state: state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedGenres,
    setSelectedGenres,
    setIsLoadingMore,
  };
};


// let carnage = movies.results.map(movie => {
//   if( checker(movie.genre_ids, selection) === true )