import styled, { isStyledComponent } from "styled-components";

export const Wrapper = styled.div`
  
  border: 2px solid #333;
  padding: 15px 10px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const TextArea = styled.textarea`
  height: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #aaa;
  background-color: transparent;
  margin-bottom: 10px;
  resize: none;
  outline: none;
  transition: 0.5;
`;

export const SubmitButton = styled.input`
    padding: 10px 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    background-color: #273c75
`;
