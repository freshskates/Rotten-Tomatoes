const express = require("express");
const router = express.Router();
const Users = require("../../Models/Users")
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/authenticate", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/validate", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", function (req, res, next) {
  let {username, password} = req.body; 

  Users.create(username, password);

});
// //
module.exports = router;
