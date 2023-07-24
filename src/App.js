import React from "react";
import Home from "./Home";
import Singlemovie from "./Singlemovie";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Movie";



const App = () => {

  // code for router here 
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<Singlemovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
