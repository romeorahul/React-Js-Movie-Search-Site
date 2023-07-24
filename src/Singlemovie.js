import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "./context";

const Singlemovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading, isError, setIsError] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response == "True") {
        setIsLoading(false);
        // setIsError({
        //   show: false,
        //   msg: "",
        // });
        setMovie(data);
      } else {
        // setIsError({
        //   show: true,
        //   msg: data.Error,
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500);

    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} />
        </figure>
        <h3 className="single-movie-margin">{movie.Title}</h3>
        <h6 className="single-movie-margin"><strong>Co-Stars : </strong>{movie.Actors}</h6>
        <h6 className="single-movie-margin"><strong>Genres : </strong>{movie.Genre}</h6>
        <NavLink to="/" className="button">Go Back</NavLink>
      </div>
    </section>
  );
};

export default Singlemovie;
