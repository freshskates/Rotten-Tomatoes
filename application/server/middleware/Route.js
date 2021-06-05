const print = require("../helper/Print");

const Global = {};

Global.printRoute = (req, res, next) => {
  print.route(req.url);
  next();
};

module.exports = Global;
