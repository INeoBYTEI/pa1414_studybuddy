const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
    deck_name: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Deck", deckSchema);
