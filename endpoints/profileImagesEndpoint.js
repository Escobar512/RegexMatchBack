const express = require("express");
const router = express.Router();

const { validatorCreateProfileImages } = require("../validators/profileImagesValidator");
const { getAllProfileImages, createProfileImage, getProfileImagesOfferor, getProfileImagesLooker, deleteProfileImage } = require("../controllers/profileImagesController");

router.get("/", getAllProfileImages);
router.post("/", validatorCreateProfileImages, createProfileImage);
router.get("/looker/:profileId", getProfileImagesLooker);
router.get("/offeror/:profileId", getProfileImagesOfferor);
router.delete("/:profileId", deleteProfileImage);

module.exports = router;