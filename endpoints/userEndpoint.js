const express = require("express");
const router = express.Router();

const {validatorCreateUser} = require("../validators/userValidator");
const {getAllUsers, createUser} = require("../controllers/userController");

router.get("/",getAllUsers);

router.post("/", validatorCreateUser, createUser);

module.exports = router