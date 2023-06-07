const { LookerPreferencesModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllLookerPreferences = async (req, res) => {
  try {
    const data = await LookerPreferencesModel.find();

    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_LOOKER_PREFERENCES");
  }
};

const createLookerPreferences = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await LookerPreferencesModel.create(body);
    res.send( data );
  } catch (e) {
    res.send({e});
  }
};

const updateLookerPreferences = async (req, res) => {
  const lookerId  = req.params.lookerId;
  const updates = matchedData(req);

  try {
    const updatedProfile = await LookerPreferencesModel.findOneAndUpdate(
      { lookerId },
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
  }
};

module.exports = { getAllLookerPreferences, createLookerPreferences, updateLookerPreferences };