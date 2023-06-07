const { check } = require("express-validator");
const validateResults  = require("../utils/handleValidator.js");


const validatorCreateUser= [
    check("userName").exists().notEmpty(),
    check("password").exists().notEmpty(),
    check("email").exists().notEmpty(),
    check("isLooking").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    

];


module.exports = {validatorCreateUser}