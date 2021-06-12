const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/user", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/validate", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
