import React from "react";

//routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styles
import { GlobalStyle } from "./GlobalStyles";

//context
import UserProvider from "./context";

//components
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
