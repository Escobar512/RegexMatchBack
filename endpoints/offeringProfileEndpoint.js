const express = require("express");
const router = express.Router();

const { validatorCreateOfferingProfile, validatorEditOfferingProfile } = require("../validators/offeringProfileValidator");
const { getAllOfferingProfiles, createOfferingProfile, uppdateOfferingProfile } = require("../controllers/offeringProfileController");

router.get("/", getAllOfferingProfiles);
router.post("/", validatorCreateOfferingProfile, createOfferingProfile);
router.put('/:profileId', validatorEditOfferingProfile, uppdateOfferingProfile);

module.exports = router;