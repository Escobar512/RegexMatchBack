const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateTechnology = [
  check("name").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateTechnology };