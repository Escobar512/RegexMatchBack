const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateOffer = [
  check("offerId").exists().notEmpty(),
  check("name").exists().notEmpty(),
  check("description").exists().notEmpty(),
  check("pay").exists().isNumeric(),
  check("country").exists().notEmpty(),
  check("schedule").exists().notEmpty(),
  check("mode").exists().notEmpty(),
  check("idOfferor").exists().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateOffer };