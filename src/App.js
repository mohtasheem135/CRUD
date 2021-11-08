import React from "react";
import './App.css';
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Add from "./components/Add/Add";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="/add" element={<Add/>} />
      </Routes>
    </div>
  );
}

export default App;
