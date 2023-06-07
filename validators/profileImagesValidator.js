const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateProfileImages = [
  check("profileId").exists().notEmpty(),
  check("imageUrl").exists().notEmpty(),
  check("isLooker").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateProfileImages };