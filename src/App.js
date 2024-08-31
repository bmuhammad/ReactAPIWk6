import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./compoanents/Nav";
import MovieList from "./compoanents/MovieList";
import React, { useState } from "react";

function App() {
  const [movieSearch, setMovieSearch] = useState([]);

  return (
    <Router>
      <div className="App">
        <Nav setMovieSearch={setMovieSearch} />
        <MovieList movieSearch={movieSearch} />
      </div>
    </Router>
  );
}

export default App;
