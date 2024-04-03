import React from "react";
import Navbar from "./Component_nav/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global_krunch.css";
import Home from "./Component_route/Home.jsx";
import About from "./Component_route/About.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
  
   
};

export default App;
