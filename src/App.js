import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Route, Routes} from "react-router-dom";
import './App.css';

function App() {

  const [state, setState] = React.useState(false);

  const helloStyle = {
    backgroundColor : 'skyblue',
    color : state ? 'white' : 'green',
    height:"10vh",
    width:"30vh",
    textAlign:"center",
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
      <h1 style={helloStyle}>Hello World!</h1>
      <button onClick={()=> setState((prev) => !prev )}>Change textcolor</button>
    </div>
  );
}

export default App;
