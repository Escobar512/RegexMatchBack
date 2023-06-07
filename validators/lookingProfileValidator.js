const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateLookingProfile = [
  check("userId").exists().notEmpty(),
  check("description").exists().notEmpty(),
  check("name").exists().notEmpty(),
  check("age").exists().isNumeric(),
  check("degree").exists().notEmpty(),
  check("school").exists().notEmpty(),
  check("position").exists().notEmpty(),
  check("profileId").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

const validatorUpdateLookingProfile = [
  check("description").exists().notEmpty(),
  check("name").exists().notEmpty(),
  check("age").exists().isNumeric(),
  check("degree").exists().notEmpty(),
  check("school").exists().notEmpty(),
  check("position").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];


module.exports = { validatorCreateLookingProfile, validatorUpdateLookingProfile };
