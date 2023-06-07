const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateResume = [
  check("profileId").exists().notEmpty(),
  check("resumeUrl").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validatorCreateResume };