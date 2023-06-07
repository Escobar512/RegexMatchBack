const express = require("express");
const router = express.Router();

const {validatorCreateLookingProfile, validatorUpdateLookingProfile} = require("../validators/lookingProfileValidator");
const {getAllLookingProfiles, createLookingProfile, getLookingProfile, updateLookingProfile, getOfferLookers} = require("../controllers/lookingProfileController");

router.get("/",getAllLookingProfiles);

router.get("/:profileId",getLookingProfile);

router.get("/offer/:offerId",getOfferLookers);

router.post("/", validatorCreateLookingProfile, createLookingProfile);

router.put("/:profileId", validatorUpdateLookingProfile, updateLookingProfile);

module.exports = router