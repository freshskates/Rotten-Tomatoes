require("dotenv").config();

const express = require("express");
const router = express.Router();
const Movies = require("../../Models/Movies");
const Cache = require("../../helper/Cache");
let count = 0;
router.get("/", async (req, res) => {
  let cache = await Cache.get("test");

  if (cache) {
    return res.send({ cache });
  }

  await Cache.set("test", count++, 5);

  res.send({ key: await Cache.get("test") });
});

router.get("/getLatest/:page(\\d)", async (req, res) => {
  console.log(`Status: getLatest(${req.params.page})`);

  try {
    let results = await Movies.getLatest(req.params.page);
    console.log(results);
    res.send(results);
  } catch (err) {
    res.send({ error: "Error Retrieving Movie Information" });
  }
});

module.exports = router;
