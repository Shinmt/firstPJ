import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
