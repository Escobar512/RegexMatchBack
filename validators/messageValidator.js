const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateMessage = [
  check("sender").exists().notEmpty(),
  check("receiver").exists().notEmpty(),
  check("message").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateMessage };