const mongoose = require("mongoose");

const lookerPreferencesSchema = new mongoose.Schema({
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
  lookerId:{
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("LookerPreferences", lookerPreferencesSchema);