const express = require("express");
const router = express.Router();

const {validatorCreateChat} = require("../validators/chatValidator");
const {getAllChats, createChat, getChatsByLookerId, getChatsByOffererId} = require("../controllers/chatController");

router.get("/",getAllChats);

router.post("/", validatorCreateChat, createChat);

router.get("/looker/:lookerId", getChatsByLookerId);

router.get("/offerer/:offererId", getChatsByOffererId);


module.exports = router