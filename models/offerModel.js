const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  offerId:{
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pay: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    required: true
  },
  idOfferor: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Offer", offerSchema);