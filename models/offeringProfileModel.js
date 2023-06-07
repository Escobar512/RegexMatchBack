const mongoose = require("mongoose");

const offeringProfileSchema = new mongoose.Schema({
    profileId: {
        type: String,
        required: true
        },
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("OfferingProfile", offeringProfileSchema);