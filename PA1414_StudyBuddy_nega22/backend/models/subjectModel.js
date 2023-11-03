const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subject_name: {
        type: String,
        required: true
    },
    link_name: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Subject", subjectSchema);