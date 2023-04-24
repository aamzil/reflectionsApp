import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Videos" element={<Videos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
