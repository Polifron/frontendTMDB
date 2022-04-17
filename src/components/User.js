import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context";

const User = () => {
  const [state, setState] = useState({});
  const [user] = useContext(Context);

  useEffect(() => {
    const userValidation = async () => {
        console.log(user)
      const respond = await fetch(
        "http://localhost:5010/api/Authorization/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(localStorage.jwtToken)
        }
      );
      const content = await respond.json();
      setState(content);
    };

    userValidation();
  }, []);

  return <div>{state.name}</div>;
};

export default User;
