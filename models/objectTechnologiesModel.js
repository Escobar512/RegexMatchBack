const mongoose = require("mongoose");

const objectTechnologiesSchema = new mongoose.Schema({
  technologyId: {
    type: String,
    required: true
  },
    dObjectId: {
    type: String,
    required: true
  },
  isLooking: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("ObjectTechnologies", objectTechnologiesSchema);