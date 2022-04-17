import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import {useCommentsFetch} from '../Hooks/useCommentsFetch';
//hooks
import {useMovieFetch} from '../Hooks/useMovieFetch';


// Components
import Actor from './Actors/Index'
import { Spinner } from "./Spinner/Spinner.styles";
import MovieInfo from './MovieInfo/Index';
import Grid from './Grid/Index';
import CommentInput from './CommentInput/Index'
// Image
import NoImage from '../Images/no_image.jpg';
import CommentInfo from './CommentInfo/Index';

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, data, setData,  loading, error } = useMovieFetch(movieId);
  
  

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
 
  return (
    <>
      <MovieInfo movie={movie}/>
      <div>
      <CommentInput data={data} setData={setData} movie={movie} />
      {movie.comments && movie.comments.map(comment => (
      console.log(comment),
      <CommentInfo
      key={comment.id}
      comment={comment.message}
      />)
      )}
      </div>
      {movie.actors &&
      <Grid header='Actors'>
        {movie.actors.map(actor => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
      
      }
      
    </>
  );
};

export default Movie;