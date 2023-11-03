const Subject = require('../models/sbModels');
const mongoose = require('mongoose');

// Get all subjects
const getSubjects = async (req, res) => {
    const subjects = await Subject.find({}).sort({createdAt: -1});
    res.status(200).json(subjects);
};
// Get a single subject
const getSubject = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Subject ID invalid"})
    }

    const subject = await Subject.findById(id);
    if(!subject) {
        return res.status(404).json({error: "Subject not Found!"})
    }

    res.status(200).json(subject);
};

// Create a new subject
const createSubject = async (req, res) => {
    const { subject_name, course_list } = req.body;
    try {
        const subject = await Subject.create({ subject_name, course_list });
        res.status(200).json(subject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a subject
const deleteSubject = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Subject ID invalid"})
    }

    const subject = await Subject.findOneAndDelete({_id: id});
    if(!subject) {
        return res.status(404).json({error: "Subject not Found!"})
    }

    res.status(200).json(subject);
};

// Update a subject
const updateSubject = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Subject ID invalid"})
    }

    const subject = await Subject.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if(!subject) {
        return res.status(404).json({error: "Subject not Found!"})
    }

    res.status(200).json(subject)
};

module.exports = {
    getSubjects,
    getSubject,
    deleteSubject,
    updateSubject,
    createSubject
};