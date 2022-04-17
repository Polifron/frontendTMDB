import { useEffect, useState, useRef } from "react";
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useTopRatedFetch = (page) => {
  const [topRatedState, setTopRatedState] = useState(initialState);
  const [topRatedLoading, setTopRatedLoading] = useState(false);
  const [isLoadingMoreTopRated, setIsLoadingMoreTopRated] = useState(false);
  const [topRatedError, setTopRatedError] = useState(false);

  const fetchTopRatedMovies = async (page) => {
    try {
      setTopRatedError(false);
      setTopRatedLoading(true);
      const movies = await API.fetchTopRated(page);
      //console.log(`toprated Movies: ${movies.results}`);
      setTopRatedState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setTopRatedError(true);
      console.log(` use effect error:${error}`);
    }
    setTopRatedLoading(false);
  };
  //Initial render
  useEffect(() => {
    setTopRatedState(initialState);
    fetchTopRatedMovies(1);
  }, []);

  useEffect(() => {
    if (!isLoadingMoreTopRated) return;
    fetchTopRatedMovies(topRatedState.page + 1);
    setIsLoadingMoreTopRated(false);
  }, [isLoadingMoreTopRated, topRatedState.page]);

  return {
    topRatedState,
    topRatedLoading,
    topRatedError,
    setIsLoadingMoreTopRated,
  };
};
