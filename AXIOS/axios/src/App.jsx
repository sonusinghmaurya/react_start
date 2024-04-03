import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Navbar from "./component_nav/Navbar.jsx";
import Home from "./component_route/Home.jsx";
import About from "./component_route/About.jsx";
import Register from "./component_route/Register.jsx";
import Login from "./component_route/Login.jsx";
import Views from "./component_route/Views.jsx";
import Update from "./component_route/Update";
import { ToastContainer,toast } from 'react-toastify'

const App = () => {
  return (
    <BrowserRouter>
    
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/views" element={<Views/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
