const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  lookerId: {
    type: String,
    required: true
  },
  offererId: {
    type: String,
    required: true
  },
  lastUpdate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Chat", chatSchema);