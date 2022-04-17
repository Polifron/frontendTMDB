import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";
//Componets
import Button from "./Button/Index";
//Styles
import { ErrorWrapper, Wrapper } from "./Login.styles";

//Context

import { Context } from "../context";
import { isPersistedStateLocalStorage } from "../helpers";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  const handleSubmit = async () => {
    try {
      setError(false);
      const respond = await fetch(
        "http://localhost:5010/api/Authorization/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(state),
        }
      );

      const content = await respond.json();
      console.log(`ccc${content}`);

      setUser({ jwtToken: content.jwt, name: content.name });

      //
      // const requestToken = await API.
    } catch (error) {
      setError(true);
      console.log(error);
      setUser(undefined);
    }
  };

  useEffect(() => {
    if (user !== undefined) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }

    console.log(`state from setItem: ${JSON.stringify(user)}`);
  }, [user]);

  return (
    <Wrapper>
      {error && <ErrorWrapper> There was an error</ErrorWrapper>}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={state.email}
        name="email"
        onChange={handleInput}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={state.password}
        name="password"
        onChange={handleInput}
      />
      <Button type="submit" text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
