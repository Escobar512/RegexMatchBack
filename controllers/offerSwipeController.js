const { OfferSwipeModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllOfferSwipes = async (req, res) => {
  try {
    const data = await OfferSwipeModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const createOfferSwipe = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await OfferSwipeModel.create(body);
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_CREATE_ITEM");
  }
};

const deleteAllSwipes = async (req, res) => {
  try {
    await OfferSwipeModel.deleteMany({});
    res.send("deleted");
  } catch (e) {
    res.send("not deleted");
    handlehttpError(res, "ERROR_CREATE_ITEM");
  }
};

module.exports = { getAllOfferSwipes, createOfferSwipe, deleteAllSwipes };