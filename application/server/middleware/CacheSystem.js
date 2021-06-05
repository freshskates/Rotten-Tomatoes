require("dotenv").config();
const redisPool = require("../config/redisPool");
const print = require("../helper/Print");

const CacheSystem = {};

CacheSystem.allMovies = async (req, res, next) => {
  try {
    const reply = await redisPool.getAsync("allMovies");
    if (reply) {
      print.debug("Cache: allMovies");
      return res.send(JSON.parse(reply));
    } else next();
  } catch (err) {
    console.log(err);
    next();
  }
};

CacheSystem.movieInfo = async (req, res, next) => {
  try {
    const reply = await redisPool.getAsync("MOVIE_ID_" + req.params.id);
    if (reply) {
      print.debug("Cache: MOVIE_ID_" + req.params.id);
      return res.send(JSON.parse(reply));
    } else next();
  } catch (err) {
    console.log(err);
    next();
  }
};

CacheSystem.netflixOriginals = async (req, res, next) => {
  try {
    const reply = await redisPool.getAsync("NetflixOriginals");
    if (reply) {
      print.debug("Cache: NetflixOriginals");
      return res.send(JSON.parse(reply));
    } else next();
  } catch (err) {
    console.log(err);
    next();
  }
};
module.exports = CacheSystem;
