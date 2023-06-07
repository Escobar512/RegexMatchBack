const express = require("express");
const router = express.Router();

const { validatorCreateLookerPreferences, validatorUpdateLookerPreferences } = require("../validators/lookerPreferencesValidator");
const { getAllLookerPreferences, createLookerPreferences, updateLookerPreferences } = require("../controllers/lookerPreferencesController");

router.get("/", getAllLookerPreferences);

router.post("/", validatorCreateLookerPreferences, createLookerPreferences);

router.put("/:lookerId", validatorUpdateLookerPreferences, updateLookerPreferences);

module.exports = router;