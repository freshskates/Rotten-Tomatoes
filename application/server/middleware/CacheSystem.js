const redisPool = require("../config/redisPool");

const CacheSystem = {};

CacheSystem.allMovies = async (req, res, next) => {
  try {
    const reply = await redisPool.getAsync("allMovies");
    if (reply) {
      console.log("Status: allMovies Cached Call");
      res.send(JSON.parse(reply));
    } else next();
  } catch (err) {
    console.log(err);
    next();
  }
};

CacheSystem.movieInfo = async (req, res, next) => {
  try {
    const reply = await redisPool.getAsync(req.params.id);
    if (reply) {
      console.log("Status: movieInfo Cached Call");
      res.send(JSON.parse(reply));
    } else next();
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = CacheSystem;
