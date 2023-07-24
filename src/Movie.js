import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="loading-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="main-box">
          {movie.map((curMovie) => {
            const { imdbID, Title, Year, Poster } = curMovie;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink className="textline" to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2 className="textline">
                      {movieName.length >= 15 ? `${movieName}...` : movieName}
                    </h2>
                    <p>{Year}</p>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
