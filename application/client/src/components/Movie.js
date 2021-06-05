import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../controller/axios";
import requests from "../controller/requests";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchMovie(id));
      setMovie(response.data);
      return response;
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Movie id: {id}</h1>
      <h1>Movie id: {movie.id}</h1>
      <h1>{movie.title}</h1>
      <h5>IMDB id: {movie.imdb_id}</h5>
      <h5>Original Language: {movie.original_language}</h5>
      <h5>Overview: {movie.overview}</h5>
      <h5>Popularity: {movie.popularity}</h5>
      {/* <h3>{movie.production_companies[0].name}</h3> */}
      <h5>Release Date: {movie.release_date}</h5>
      <h5>Runtime: {movie.runtime}m</h5>
      <h5>Status: {movie.status}</h5>

      {/* <h1>Movie: {JSON.stringify(movie)}</h1> */}
      <span className="container">
        <img
          key={movie.id}
          className={`row__poster row__posterLarge"`}
          src={`${baseURL}${movie.backdrop_path}`}
          alt={movie.name}
        />
        <img src={`${baseURL}${movie.poster_path}`}></img>
      </span>
    </div>
  );
}

export default Movie;
