const express = require("express");
const router = express.Router();

const { validatorCreateOfferSwipe } = require("../validators/offerSwipeValidator");
const { getAllOfferSwipes, createOfferSwipe, deleteAllSwipes } = require("../controllers/offerSwipeController");

router.get("/", getAllOfferSwipes);
router.post("/", validatorCreateOfferSwipe, createOfferSwipe);

router.delete("/", deleteAllSwipes);

module.exports = router;