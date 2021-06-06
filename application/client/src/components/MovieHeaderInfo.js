import React from "react";

function MovieHeaderInfo({ movie }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const getSubstring = (msg) => {
    if (msg) return msg.slice(0, 4);
    return "null";
  };
  return (
    <div
      className="hero__section header"
      style={{
        backgroundImage: `url("${baseURL}${movie.backdrop_path}")`,
      }}
    >
      <div className="inner__section">
        <div className="single__column images">
          <div className="poster__wrapper true">
            <div className="poster">
              <div className="image__content backdrop">
                <img src={`${baseURL}${movie.poster_path}`}></img>
              </div>
            </div>
          </div>
          <div className="header__poster__wrapper true">
            <div className="header poster inner__desc">
              <div className="header_info">
                <h2>
                  {movie.title}
                  <span className="release__date">
                    ({getSubstring(movie.release_date)})
                  </span>
                </h2>
                <h3>Overview</h3>
                <div>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHeaderInfo;
