import React from 'react';
import Button from '../Button/Index';
import { Message, Wrapper } from './CommentInfo.styles';



const CommentInfo=({comment})=>(
    
    <Wrapper className="container">
    <p>{comment}</p>
    </Wrapper>
  
)

export default CommentInfo