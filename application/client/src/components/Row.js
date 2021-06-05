import React, { useState, useEffect } from "react";
import axios from "../controller/axios";
import { Link } from "react-router-dom";

import "./Row.css";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const renderMovies = (movies) => {
    return movies.map((movie) => {
      return (
        <Link to={`/movie/${movie.id}`}>
          <span className="container">
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <p>{movie.title}</p>
          </span>
        </Link>
      );
    });
  };

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchURL);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">{renderMovies(movies)}</div>
    </div>
  );
}

export default Row;
