const { ResumeModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllResumes = async (req, res) => {
  try {
    const data = await ResumeModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const getResumeLooker = async (req, res) => {
  const  profileId  = req.params.profileId;

  try {
    const data = await ResumeModel.find({ profileId });
    res.send(data);
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
    res.send({ e });
  }
};


const createResume = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await ResumeModel.create(body);
    res.send( data );
  } catch (e) {
    res.send({ e });
  }
};

const deleteResume = async (req, res) => {
  const  profileId  = req.params.profileId;

  try {
    const deletedImages = await ResumeModel.deleteMany({ profileId });

    if (!deletedImages) {
      return handlehttpError(res, "PROFILE_IMAGE_NOT_FOUND", 404);
    }

    res.send({ message: 'Profile image deleted successfully' });
  } catch (e) {
    const message = e.message;
    res.send({ message });
  }
};

module.exports = { getAllResumes, createResume, getResumeLooker,deleteResume };