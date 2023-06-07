const express = require("express");
const router = express.Router();

const {validatorCreateMessage} = require("../validators/messageValidator");
const {getAllMessagees, createMessage} = require("../controllers/messageController");

router.get("/",getAllMessagees);

router.post("/", validatorCreateMessage, createMessage);

module.exports = router