const db = require("../bin/database");
const bcrypt = require("bcrypt");

const Users = {};

Users.create = async (username, password) => {
    try {
        return true;
    } catch {
        return false;
    }
}

module.exports = Users;
