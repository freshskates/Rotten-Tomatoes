require("dotenv").config();
const axios = require("axios");

const Movies = {};

Movies.getLatest = async (page) => {
  try {
    let response = await axios.get(
      `${process.env.API_HOST}/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=${page}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

Movies.getMovieId = async (movie_id) => {
  try {
    let response = await axios.get(
      `${process.env.API_HOST}/movie/${movie_id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

Movies.getNetflixOriginals = async () => {
  try {
    let response = await axios.get(
      `${process.env.API_HOST}/discover/tv?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
module.exports = Movies;
