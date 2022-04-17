import { useEffect, useState } from "react";
import API from "../API";
export const useCommentsFetch = (movieId)=>{
    const [commentState, setCommentState] = useState({});
    const [commentLoading, setCommentLoading] = useState(false);
    const [commentError, setCommentError] = useState(false);

    const fetchComments = async(movieId)=>{
        try{
            setCommentError(false);
            setCommentLoading(true);
            let comments = await API.fetchComments(movieId);
            setCommentState(comments);
          
        }catch(error){
            console.log(`error message: ${error}`)
            setCommentError(true);
            console.log(commentError)
           
        }
    }
    useEffect(()=>{
        fetchComments(movieId);
    },[movieId])
    
    return{
        commentState,
        commentLoading,
        commentError
    };

}