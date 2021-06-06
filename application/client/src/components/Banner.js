import React, { useState, useEffect } from "react";
import axios from "../controller/axios";
import requests from "../controller/requests";
import { Link } from "react-router-dom";
import "./styles/banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  const getRandom = (data) => {
    let out = null;
    while (true) {
      console.log("CALLING");
      out = data.results[Math.floor(Math.random() * data.results.length - 1)];
      if (out && out.backdrop_path) return out;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchLatest);
      setMovie(getRandom(request.data));
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        // backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>
        <div className="banner__buttons">
          <Link to={`/movie/${movie.id}`} className="banner__button">
            Info
          </Link>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        {/* description */}
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
}

export default Banner;
