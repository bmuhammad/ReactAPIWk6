import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./compoanents/Nav"

function App() {
  return (
    <Router>
 
      <div className="App">
        <Nav  />
   
      </div>
    </Router>
  );
}

export default App;
