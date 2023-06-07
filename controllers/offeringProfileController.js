const { OfferingProfileModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllOfferingProfiles = async (req, res) => {
  try {
    const data = await OfferingProfileModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const uppdateOfferingProfile = async (req, res) => {
  const profileId  = req.params.profileId;
  const  update  = matchedData(req);

  try {

    // Find and update the offering profile
    const updatedOfferingProfile = await OfferingProfileModel.findOneAndUpdate(
      { profileId },
      update ,
      { new: true }
    );

    if (!updatedOfferingProfile) {
      return res.status(404).json({ message: 'Offering profile not found' });
    }

    res.send(updatedOfferingProfile );
  } catch (e) {
    var message = e.message;
    res.send({ message });
  }
};

const createOfferingProfile = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await OfferingProfileModel.create(body);
    res.send(data );
  } catch (e) {
    handlehttpError(res, "ERROR_CREATE_ITEM");
  }
};

module.exports = { getAllOfferingProfiles, createOfferingProfile, uppdateOfferingProfile };