const { TechnologyModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllTechnologies = async (req, res) => {
  try {
    const data = await TechnologyModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const createTechnology = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await TechnologyModel.create(body);
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_CREATE_ITEM");
  }
};

module.exports = { getAllTechnologies, createTechnology };