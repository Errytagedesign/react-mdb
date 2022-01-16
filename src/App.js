import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components

import Header from "./components/header";

import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

// styles

import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
