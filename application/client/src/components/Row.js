import React, { useState, useEffect } from "react";
import axios from "../controller/axios";
import { Link } from "react-router-dom";

import "./styles/Row.css";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const renderMovies = (movies) => {
    return movies.map((movie) => {
      return (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none" }}
        >
          <span className="container">
            <img
              key={movie.id}
              className={`${isLargeRow ? "row__posterLarge" : "row__poster"}  `}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <a className="poster__title" key={movie.title}>
              {movie.title}
            </a>
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
