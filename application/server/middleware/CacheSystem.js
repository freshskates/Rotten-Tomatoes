const redisPool = require("../config/redisPool");

const CacheSystem = {};

CacheSystem.allMovies = async (req, res, next) => {
  try {
    const reply = await redisPool.getAsync("allMovies");
    console.log("Status: allMovies Cached Call");
    if (reply) res.send(JSON.parse(reply));
    else next();
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = CacheSystem;
