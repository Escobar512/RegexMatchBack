const mongoose = require("mongoose");

const lookingProfileSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
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
  age: {
    type: Number,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("LookingProfile", lookingProfileSchema);