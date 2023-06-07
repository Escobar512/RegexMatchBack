const { MessageModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllMessagees = async (req, res) => {
  try {
    const data = await MessageModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const createMessage = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await MessageModel.create(body);
    res.send(data );
  } catch (e) {
    handlehttpError(res, "ERROR_CREATE_ITEM");
  }
};

module.exports = { getAllMessagees, createMessage };