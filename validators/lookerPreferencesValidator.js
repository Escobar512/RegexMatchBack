const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateLookerPreferences = [
  check("pay").exists().notEmpty(),
  check("country").exists().notEmpty(),
  check("schedule").exists().notEmpty(),
  check("mode").exists().notEmpty(),
  check("lookerId").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

const validatorUpdateLookerPreferences = [
  check("pay").exists().notEmpty(),
  check("country").exists().notEmpty(),
  check("schedule").exists().notEmpty(),
  check("mode").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateLookerPreferences, validatorUpdateLookerPreferences };