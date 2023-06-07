const { ObjectTechnologiesModel } = require('../models');
const { LookerPreferencesModel } = require('../models');
const { OfferModel } = require('../models');
const { OfferSwipeModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllObjectTechnologies = async (req, res) => {
  try {
    const data = await ObjectTechnologiesModel.find();
    res.send( data );
  } catch (e) {
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const getTechnologyIdsByDObjectId = async (req, res) => {
  const { dObjectId } = req.query;

  try {
    const objectTechnologies = await ObjectTechnologiesModel.find({ dObjectId });

    if (objectTechnologies.length === 0) {
      return handlehttpError(res, "OBJECT_TECHNOLOGIES_NOT_FOUND", 404);
    }

    const technologyIds = objectTechnologies.map(obj => obj.technologyId);

    res.send( technologyIds );
  } catch (e) {
    handlehttpError(res, "ERROR_FIND_OBJECT_TECHNOLOGIES");
  }
};

const getMostTechnologiesMatched = async (req, res) => {
  const dObjectId = req.params.dObjectId;
  const lookerId = req.params.dObjectId;

  try {
    const offerSwipes = await OfferSwipeModel.find({ lookerId });
    const objectTechnologies = await ObjectTechnologiesModel.find({ dObjectId });
    const lookerPreferences = await LookerPreferencesModel.findOne({ lookerId });

    if (objectTechnologies.length === 0) {
      return handlehttpError(res, "OBJECT_TECHNOLOGIES_NOT_FOUND", 404);
    }

    const technologyIds = objectTechnologies.map(obj => obj.technologyId);

    var swipedIds = offerSwipes.map(obj => obj.offerId);

    const preferredOffers = await ObjectTechnologiesModel.aggregate([
      {
        $match: {
          technologyId: { $in: technologyIds },
          dObjectId: { $ne: dObjectId },
          isLooking: false
        }
      },
      {
        $group: {
          _id: "$dObjectId",
          commonTechCount: { $sum: 1 }
        }
      },
      {
        $sort: { commonTechCount: -1 }
      }
    ]);

    const filteredOffers = preferredOffers.filter(obj => !swipedIds.includes(obj._id));
    const offerIds = filteredOffers.map(obj => obj._id);

    // Construct the preferences query based on non-empty and non-"Any" values
    const preferencesQuery = {
      offerId: { $in: offerIds },
      pay: { $gte: lookerPreferences.pay }
    };

    if (lookerPreferences.country !== "Cualquiera") {
      preferencesQuery.country = lookerPreferences.country;
    }

    if (lookerPreferences.state !== "Cualquiera") {
      preferencesQuery.state = lookerPreferences.state;
    }

    if (lookerPreferences.schedule !== "Cualquiera") {
      preferencesQuery.schedule = lookerPreferences.schedule;
    }

    if (lookerPreferences.mode !== "Cualquiera") {
      preferencesQuery.mode = lookerPreferences.mode;
    }



    const matchedOffers = await OfferModel.find(preferencesQuery);
    const sortedOffers = offerIds.map(offerId => matchedOffers.find(offer => offer.offerId === offerId)).filter(Boolean);

    res.send(sortedOffers);
  } catch (e) {
    res.send({ e });
  }
};

const createObjectTechnologies = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await ObjectTechnologiesModel.create(body);
    res.send(data );
  } catch (e) {
    handlehttpError(res, "ERROR_CREATE_ITEM");
  }
};

module.exports = { getAllObjectTechnologies, createObjectTechnologies, getMostTechnologiesMatched, getTechnologyIdsByDObjectId };