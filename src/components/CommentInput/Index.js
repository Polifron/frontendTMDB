import React, { useEffect, useState, useContext } from "react";
import Button from "../Button/Index";
import { SubmitButton, TextArea, Title, Wrapper } from "./CommentInput.styles";

import API from "../../API";
import { Context } from "../../context";
import { Link } from "react-router-dom";

const CommentInput = ({ movie }) => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [user] = useContext(Context);
  console.log(`movie from comment input${JSON.stringify(user)}`);

  let movieId;

  if (movie && movie.movie.hasOwnProperty("id")) {
    movieId = JSON.stringify(movie.movie.id);
  }
  const handelSetMessage = (e) => {
    setMessage(e.target.value);

    setData({ message, movieId });
  };

  console.log(movieId);
  const postComment = async (e) => {
    if (user) {
      try {
        API.postComment(data, movieId);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("need to login");
      e.preventDefault();
    }
  };
  return (
    <Wrapper className="container">
      <form onSubmit={postComment}>
        <label htmlFor="comment">Leave Us a Comment</label>
        <TextArea
          name={data.title}
          value={data.title}
          onChange={handelSetMessage}
          placeholder="Add Your Comment"
        ></TextArea>
        <div className="btn">
          {user ? (
            <SubmitButton type="submit" required />
          ) : (
            <SubmitButton as={Link} to="/login">Submit</SubmitButton>
          )}
        </div>
      </form>
    </Wrapper>
  );
};

export default CommentInput;
//post comment
// const postComment = async (data)=>{
//   try {
//     const postComment = await API.postComment(data)
//     console.log(postComment)
//   }catch(error){
//     console.log(error)
//   }
// }

// useEffect(()=>{
//   postComment(data);
// },[data])
