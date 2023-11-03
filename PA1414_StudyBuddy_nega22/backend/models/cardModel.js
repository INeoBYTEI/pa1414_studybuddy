const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    deck_ID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    term: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    mastery: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model("Card", cardSchema);
