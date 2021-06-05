const express = require("express");
const router = express.Router();
const Movies = require("../../Models/Movies");

/* GET users listing. */
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
