const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateObjectTechnologies = [
  check("technologyId").exists().notEmpty(),
  check("dObjectId").exists().notEmpty(),
  check("isLooking").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateObjectTechnologies };