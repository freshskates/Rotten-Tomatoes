require("dotenv").config();
const axios = require("axios");

const Movies = {};

Movies.getLatest = async (page) => {
  try {
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=${page}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
module.exports = Movies;
