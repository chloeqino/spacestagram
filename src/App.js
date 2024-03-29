import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LikedPhoto from "./components/LikedPhoto";
import "./App.css";
import NanBar from "./components/NavBar";

function App() {
  return (
 
      <div className="app">
        <NanBar />
        <Routes>
          <Route element={<Home />} path="/spacestagram/" />
          <Route element={<LikedPhoto />} path="/spacestagram/likes" />
          </Routes>
          
      </div>
    
  );
}

export default App;
