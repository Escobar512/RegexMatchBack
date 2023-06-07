const { ProfileImagesModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllProfileImages = async (req, res) => {
  try {
    const data = await ProfileImagesModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};


const getProfileImagesLooker = async (req, res) => {
  const  profileId  = req.params.profileId;

  try {
    const data = await ProfileImagesModel.find({ profileId, isLooker: true });
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const getProfileImagesOfferor = async (req, res) => {
  const  profileId  = req.params.profileId;

  try {
    const data = await ProfileImagesModel.find({ profileId, isLooker: false });
    res.send(data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const createProfileImage = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await ProfileImagesModel.create(body);
    res.send(data );
  } catch (e) {
    const message = e.message;
    res.send({ message });
  }
};

const deleteProfileImage = async (req, res) => {
  const  profileId  = req.params.profileId;

  try {
    const deletedImages = await ProfileImagesModel.deleteMany({ profileId });

    if (!deletedImages) {
      return handlehttpError(res, "PROFILE_IMAGE_NOT_FOUND", 404);
    }

    res.send({ message: 'Profile image deleted successfully' });
  } catch (e) {
    const message = e.message;
    res.send({ message });
  }
};

module.exports = { getAllProfileImages, createProfileImage, getProfileImagesLooker, getProfileImagesOfferor, deleteProfileImage };