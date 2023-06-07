const express = require("express");
const router = express.Router();

const { validatorCreateObjectTechnologies } = require("../validators/objectTechnologiesValidator");
const { getAllObjectTechnologies, 
    createObjectTechnologies, 
    getTechnologyIdsByDObjectId, 
    getMostTechnologiesMatched } = require("../controllers/objectTechnologiesController");

router.get("/", getAllObjectTechnologies);
router.get("/technologies?=dObjectId", getTechnologyIdsByDObjectId);
router.get("/technologyMatches/:dObjectId", getMostTechnologiesMatched);
router.post("/", validatorCreateObjectTechnologies, createObjectTechnologies);

module.exports = router;