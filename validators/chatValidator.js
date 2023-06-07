const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateChat = [
  check("lookerId").exists().notEmpty(),
  check("offererId").exists().notEmpty(),
  check("lastUpdate").exists().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateChat };