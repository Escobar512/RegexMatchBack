const express = require("express");
const router = express.Router();

const { validatorCreateOffer } = require("../validators/offerValidator");
const { getAllOffers, createOffer, getOffersByOfferor, getLookingProfilesByOffer, getOffersMatched } = require("../controllers/offerController");

router.get("/", getAllOffers);
router.post("/", validatorCreateOffer, createOffer);
router.get("/:idOfferor", getOffersByOfferor);
router.get("/offersMatched/:dObjectId", getOffersMatched);
router.get("/lookers/:offerorId", getLookingProfilesByOffer);

module.exports = router;