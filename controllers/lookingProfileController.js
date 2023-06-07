const { LookingProfileModel } = require('../models');
const { OfferSwipeModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllLookingProfiles = async (req, res) => {
  try {
    const data = await LookingProfileModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const getLookingProfile = async (req, res) => {
  const profileId = req.params.profileId
  try {
    const data = await LookingProfileModel.find({profileId});
    res.send(data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const getOfferLookers = async (req, res) => {
  const offerIdP = req.params.offerId
  try {
    const data = await OfferSwipeModel.find({offerId: offerIdP, swiped: true});
    var lookerIds = data.map(obj => obj.lookerId);

    const lookers = await LookingProfileModel.find({ profileId: { $in: lookerIds } });

    res.send( lookers );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const createLookingProfile = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await LookingProfileModel.create(body);
    res.send(data );
  } catch (e) {
    var message = e.message;
    res.send({ message });
    handlehttpError(res, "ERROR_CREATE_ITEM");
  }
};

const updateLookingProfile = async (req, res) => {
  const profileId  = req.params.profileId;
  const updates = matchedData(req);

  try {
    const updatedProfile = await LookingProfileModel.findOneAndUpdate(
      { profileId },
      updates,
      { new: true }
    );

    if (!updatedProfile) {
      return handlehttpError(res, "LOOKING_PROFILE_NOT_FOUND", 404);
    }

    res.send( updatedProfile );
  } catch (e) {
    var message = e.message;
    res.send({ message });
    handlehttpError(res, "ERROR_UPDATE_LOOKING_PROFILE");
  }
};

module.exports = { getAllLookingProfiles, createLookingProfile, getLookingProfile, updateLookingProfile, getOfferLookers };