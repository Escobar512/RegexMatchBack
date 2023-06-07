const mongoose = require("mongoose");

const profileImagesSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true
  },
    imageUrl: {
    type: String,
    required: true
  },
    isLooker: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("ProfileImages", profileImagesSchema);