require("dotenv").config();
const express = require("express");
const router = express.Router();
const Movies = require("../../Models/Movies");
const Cache = require("../../helper/Cache");
const CacheLUT = require("../../middleware/CacheSystem");

router.get("/getLatest/:page(\\d)", CacheLUT.allMovies, async (req, res) => {
  try {
    let results = await Movies.getLatest(req.params.page);
    await Cache.set("allMovies", JSON.stringify(results), 15);
    res.send(results);
  } catch (err) {
    res.send({ error: "Error Retrieving Movie Information" });
  }
});

router.get("/id/:id(\\d)", CacheLUT.movieInfo, async (req, res) => {
  try {
    let results = await Movies.getMovieId(req.params.id);
    await Cache.set(req.params.id, JSON.stringify(results), 30);
    res.send(results);
  } catch (err) {
    res.send({ error: "Error Retrieving Movie Information" });
  }
});

module.exports = router;
