import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";
//Componets
import Button from "./Button/Index";
//Styles
import { Wrapper } from "./Login.styles";

//Context

import { Context } from "../context";

const initialState = {
    name: "",
    email: "",
    password: "",
  };

const Register = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value });
    console.log(state);
  };

  const handleSubmit = async (e) => {
    setError(false);
    try {
      //   const respone = await fetch('http://localhost:7186/api/Auth/register', {
      //   method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //   body: JSON.stringify(state)
      // })
      //  const content = await respone.json();
      //  console.log(content)
      API.postRegister(state);
      
     
    navigate('/login');
    } catch (er) {
      setError(true);
      console.log(er, error);
    }
  };

  return (
    <Wrapper>
      <label htmlFor='name'>Username</label>
      <input type="text" value={state.name} name='name' onChange={handleInput} />

      <label htmlFor='email' >Email</label>
      <input
        type='email'
        value={state.email}
        name='email'
        onChange={handleInput}
      />
      <label htmlFor='password' >Password</label>
      <input
        type='password'
        value={state.password}
        name='password'
        onChange={handleInput}
      />
      <Button text="Register" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Register;
