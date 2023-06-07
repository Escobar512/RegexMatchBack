const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.js");

const validatorCreateOfferingProfile = [
  check("userId").exists().notEmpty(),
  check("description").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

const validatorEditOfferingProfile = [
  check('description')
    .notEmpty()
    .withMessage('Description is required'),
];


module.exports = { validatorCreateOfferingProfile, validatorEditOfferingProfile };