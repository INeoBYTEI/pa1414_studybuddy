const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subject_name: {
        type: String,
        required: true
    }
}, {timestamps: true});

const courseSchema = new Schema({
    course_name: {
        type: String,
        required: true
    },
    deck_list: {
        type: Array
    }
}, {timestamps: true});

const deckSchema = new Schema({
    deck_ID: {
        type: String
    },
    deck_name: {
        type: String,
        required: true
    },
    deck_creator: {
        type: String,
        required: true
    },
    card_list: {
        type: Array
    }
}, {timestamps: true});

const cardSchema = new Schema({
    card_ID: {
        type: String,
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

module.exports = 
    mongoose.model("Subject", subjectSchema),
    mongoose.model("Course", courseSchema),
    mongoose.model("Deck", deckSchema),
    mongoose.model("Card", cardSchema)
