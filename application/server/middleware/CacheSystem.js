const redisPool = require("./redisPool");

const CacheSystem = {};

CacheSystem.allMovies = async (req, res, next) => {
  const reply = await redisPool.getAsync("allMovies");
  if (reply) res.send(reply);
  else next();
};

module.exports = CacheSystem;
