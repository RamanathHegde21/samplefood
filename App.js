import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";

function App(){
  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route> 
            <Route path="/Menu" element={<Menu/>}></Route>
            <Route path="/About" element={<About/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;