const express = require("express");
const router = express.Router();

const { validatorCreateResume } = require("../validators/resumeValidator");
const { getAllResumes, createResume, getResumeLooker, deleteResume } = require("../controllers/resumeController");

router.get("/", getAllResumes);
router.post("/", validatorCreateResume, createResume);
router.get("/:profileId", getResumeLooker);
router.delete("/:profileId", deleteResume);

module.exports = router;