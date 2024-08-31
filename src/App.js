import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./compoanents/Nav"
import MovieList from "./compoanents/MovieList";

function App() {
  return (
    <Router>
 
      <div className="App">
        <Nav  />
        <MovieList />
   
      </div>
    </Router>
  );
}

export default App;
