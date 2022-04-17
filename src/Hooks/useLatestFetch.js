import { useEffect, useState } from "react";
import API from "../API";

//helpers
import { isPersistedState } from "../helpers";


export const useLatestFetch = () => {
  const [latestState, setLatestState] = useState({});
  const [latestLoading, setLatestLoading] = useState(false);
  const [latestError, setLatestError] = useState(false);


  const fetchLatestMovie = async () => {
    try {
      setLatestError(false);
      setLatestLoading(true);
      const movie = await API.fetchLatest();
      console.log(`latest movies: ${movie}`);
      setLatestState( {
        movie
      });
    } catch (error) {
      setLatestError(true);
      console.log(error);
    }
    setLatestLoading(false);
    
  };

  //Initial render
  useEffect(() => {
   

  fetchLatestMovie();
  }, []);
  
  useEffect(() => {
    sessionStorage.setItem(JSON.stringify(latestState));
  }, [latestState]);
  
  return {
    latestState,
    latestLoading,
    latestError
  };
};
