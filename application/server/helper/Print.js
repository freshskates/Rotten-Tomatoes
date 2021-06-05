const chalk = require("chalk");

const print = {};
const log = console.log;

print.route = (message) => {
  log(chalk.black.bgCyan(message));
};

print.error = (message) => {
  log(chalk.black.bgRed(message));
};

print.success = (message) => {
  log(chalk.black.bgGreen(message));
};

print.debug = (message) => {
  log(chalk.black.bgBlue(message));
};
module.exports = print;
