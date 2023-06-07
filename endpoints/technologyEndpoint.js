const express = require("express");
const router = express.Router();

const { validatorCreateTechnology } = require("../validators/technologyValidator");
const { getAllTechnologies, createTechnology } = require("../controllers/technologyController");

router.get("/", getAllTechnologies);
router.post("/", validatorCreateTechnology, createTechnology);

module.exports = router;