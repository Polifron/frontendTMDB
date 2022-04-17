import React from "react";
import PropTypes from "prop-types";
// Components
import Thumb from "../Thumb/Index";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from "../../Images/no_image.jpg";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import { Spinner } from "../Spinner/Spinner.styles";

const MovieInfo = ({ movie }) => {
  return (
    <div>
      {movie.movie ? (
        <Wrapper backdrop={movie.movie.backdrop_path}>
          <Content>
            <Thumb
              image={
                movie.movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.movie.poster_path}`
                  : NoImage
              }
              clickable={false}
            />
            <Text>
              <h1>{movie.movie.title}</h1>
              <h3>PLOT</h3>
              <p>{movie.movie.overview}</p>

              <div className="rating-directors">
                <div>
                  <h3>RATING</h3>
                  <div className="score">{movie.movie.vote_average}</div>
                </div>
                <div className="director"></div>
                <div className="director">
                  <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                  {movie.directors.map((director) => (
                    <p key={director.credit_id}>{director.name}</p>
                  ))}
                </div>
              </div>
            </Text>
          </Content>
        </Wrapper>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
