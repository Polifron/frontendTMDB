import React from "react";

// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//hooks
import { useHomeFetch } from "../Hooks/useHomeFetch";
import { useTopRatedFetch } from "../Hooks/useTopRatedFetch";
import { useLatestFetch } from "../Hooks/useLatestFetch";

//helpers
import { uniqueMovies, checker } from "../helpers";

//image
import NoImage from "../Images/no_image.jpg";

//components
import GreatImage from "./GreatImage/GreatImage";
import Grid from "./Grid/Index";
import SearchBar from "./SearchBar/Index";
import { Spinner } from "./Spinner/Spinner.styles";
import Thumb from "./Thumb/Index";
import DropDown from "./DropDown/Index";
import Button from "./Button/Index";

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedGenres,
    setSelectedGenres,
    setIsLoadingMore,
  } = useHomeFetch();

  const {
    topRatedState,
    topRatedLoading,
    topRatedError,
    setIsLoadingMoreTopRated,
  } = useTopRatedFetch();



  const { latestState, latestLoading, latestError } = useLatestFetch;

  if (error || topRatedError || latestError) {
    return <div>Something went wrong ...</div>;
  }
  let letThereBeCarnage = "";
  let lastResult = "";

  if (searchTerm && selectedGenres.length > 0) {
    const selection = selectedGenres.map((genre) => genre.id);
    letThereBeCarnage = state.results.filter((movie) => {
      if (checker(movie.genre_ids, selection)) return movie.title;
    });
    console.log(
      `let there be carnage: ${letThereBeCarnage.map((item) => item.title)}; `
    );
    lastResult = letThereBeCarnage;
  } else {
    lastResult = uniqueMovies(state.results);
  }
  let lastResultTopRated = uniqueMovies(topRatedState.results);

  return (
    <>
    
    <SearchBar setSearchTerm={setSearchTerm} />
      <DropDown
        title="Any"
        multiSelect
        setSelectedGenres={setSelectedGenres}
      />
      
      {state.results[0] ? (
        <GreatImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ): null}
      
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        
        {lastResult.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
      <>
        {!searchTerm && selectedGenres.length ===0 ? (
            <div>
              <Grid header="Top Rated Movies">
                {lastResultTopRated.map((movie) => (
                  <Thumb
                    key={movie.id}
                    clickable
                    image={
                      movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : NoImage
                    }
                    movieId={movie.id}
                  />
                ))}
              </Grid>
              {topRatedLoading && <Spinner />}
              {topRatedState.page < topRatedState.total_pages &&
                !topRatedLoading && (
                  <Button
                    text="Load More"
                    callback={() => setIsLoadingMoreTopRated(true)}
                  />
                )}
            </div>
          )
                  : null
        }
      </>
    </>
  );
};

export default Home;
