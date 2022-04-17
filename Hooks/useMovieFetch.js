import { useState, useEffect } from "react";

//api
import API from "../API";
//helpers

import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //  console.log(data);
  const fetchMovie = async (movieId) => {
    try {
      setLoading(true);
      setError(false);
      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      const comments = await API.fetchComments(movieId);
      // Get directors only
      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );
      setState({
        movie,
        comments,
        actors: credits.cast,
        directors,
      });
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
 

  // // init render
  // useEffect(() => {
  //   // const sessionState = isPersistedState(movieId);
  //   // if (sessionState) {
  //   //   setState(sessionState);
  //   //   setLoading(false);
  //   //   return;
  //   // }
  //   fetchMovie(movieId);
  // }, [movieId]);

  // // Write to sessionStorage
  // // useEffect(() => {
  // //   sessionStorage.setItem(movieId, JSON.stringify(state));
  // // }, [movieId, state]);

  useEffect(() => {
    const sessionState = isPersistedState(movieId);
    if (sessionState && sessionState.movie !== undefined) {
       //  console.log(`is sesion state${JSON.stringify(sessionState)}`);
      setState(sessionState);
      setLoading(false);
      return;
   }
   fetchMovie(movieId);
 }, [movieId]);

//Write to sessionStorage
 useEffect(() => {
  sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
