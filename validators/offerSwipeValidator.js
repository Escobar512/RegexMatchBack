const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateOfferSwipe = [
  check("lookerId").exists().notEmpty(),
  check("offerId").exists().notEmpty(),
  check("swiped").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateOfferSwipe };