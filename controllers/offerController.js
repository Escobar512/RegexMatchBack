const { OfferModel } = require('../models');
const { OfferSwipeModel } = require('../models');
const { LookingProfileModel } = require('../models');
const { LookerPreferencesModel } = require('../models');
const { matchedData } = require('express-validator');
const { handlehttpError } = require('../utils/handlehttpError');

const getAllOffers = async (req, res) => {
  try {
    const data = await OfferModel.find();
    res.send(data );
  } catch (e) {
    const message = e.message;
    res.send({ message });
    handlehttpError(res, "ERROR_GET_ALL_ITEMS");
  }
};

const getOffersByOfferor = async (req, res) => {
  try {
    const { idOfferor } = req.params;
    const offers = await OfferModel.find({ idOfferor });

    res.send(offers);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

const getLookingProfilesByOffer = async (req, res) => {
  try {
    const { offerId } = req.params;

    const offers = await OfferSwipeModel.find({ idOffer: offerId,  swipe: true });

    const lookerId = offers.map(obj => obj.lookerId);

    const lookingProfiles = await LookingProfileModel.find({
      profileId: { $in: lookerId }
    });

    res.send(lookingProfiles );
  } catch (error) {
    const message = error.message;
    res.send({ message });
  }
};

const createOffer = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await OfferModel.create(body);
    res.send(data );
  } catch (e) {
    res.send({ e });
  }
};

const getOffersMatched = async (req, res) => {
  const lookerId = req.params.dObjectId;

  try {
    const offerSwipes = await OfferSwipeModel.find({ lookerId });
    const offers = await OfferModel.find();
    const lookerPreferences = await LookerPreferencesModel.findOne({ lookerId });

    var swipedIds = offerSwipes.map(obj => obj.offerId);

    const filteredOffers = offers.filter(obj => !swipedIds.includes(obj.offerId));
    const offerIds = filteredOffers.map(obj => obj.offerId);

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

    res.send(matchedOffers);
  } catch (e) {
    res.send({ e });
  }
};

module.exports = { getAllOffers, createOffer, getOffersByOfferor, getLookingProfilesByOffer, getOffersMatched };