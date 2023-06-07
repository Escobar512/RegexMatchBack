const { ChatModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllChats = async (req, res) => {
  try {
    const data = await ChatModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const getChatsByLookerId = async (req, res) => {
  const  lookerId  = req.params.lookerId;

  try {
    const chats = await ChatModel.find({ lookerId })
      .sort({ lastUpdate: -1 }) 

    res.send( chats );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_CHATS", 500);
  }
};

const getChatsByOffererId = async (req, res) => {
  const { offererId } = req.params;

  try {
    const chats = await ChatModel.find({ offererId })
      .sort({ lastUpdate: -1 })
      .exec();

    res.send( chats );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_CHATS", 500);
  }
};



const createChat = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await ChatModel.create(body);
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_CREATE_ITEM");
  }
};

module.exports = { getAllChats, createChat, getChatsByLookerId, getChatsByOffererId};