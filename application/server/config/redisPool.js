require("dotenv").config();
const redis = require("redis");
const { promisify } = require("util");

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.PORT,
  password: process.env.REDIS_PASSWORD,
});

const CacheSystem = {};

CacheSystem.getAsync = promisify(client.get).bind(client);

CacheSystem.setAsync = promisify(client.set).bind(client);

module.exports = CacheSystem;

// const redis = require("redis");
// const { promisify } = require("util");
// const client = redis.createClient({
//   host: process.env.REDIS_HOST,
//   port: process.env.PORT,
//   password: process.env.REDIS_PASSWORD,
// });

// client.on("error", function (error) {
//   console.error(error);
// });

// const getAsync = promisify(client.get).bind(client);

// getAsync("test").then(console.log).catch(console.error);
