const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true
  },
    resumeUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("ResumeModel", resumeSchema);