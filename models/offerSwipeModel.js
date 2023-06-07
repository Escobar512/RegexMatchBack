const mongoose = require("mongoose");

const offerSwipeSchema = new mongoose.Schema({
  lookerId: {
    type: String,
    required: true
  },
  offerId: {
    type: String,
    required: true
  },
  swiped: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("OfferSwipe", offerSwipeSchema);