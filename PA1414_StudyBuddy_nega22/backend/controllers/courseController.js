const Course = require('../models/courseModel');
const mongoose = require('mongoose');

// Get all Courses
const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: 1});
    res.status(200).json(courses);
};
// Get a single Course
const getCourse = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Course ID invalid"})
    }

    const course = await course.findById(id);
    if(!Course) {
        return res.status(404).json({error: "Course not Found!"})
    }

    res.status(200).json(Course);
};

// Create a new Course
const createCourse = async (req, res) => {
    console.log(req.body);
    const {course_name, subject_id} = req.body;
    try {
        const course = await Course.create({course_name, subject_id});
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Course
const deleteCourse = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Course ID invalid"})
    }

    const course = await course.findOneAndDelete({_id: id});
    if(!course) {
        return res.status(404).json({error: "Course not Found!"})
    }

    res.status(200).json(Course);
};

// Update a Course
const updateCourse = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Course ID invalid"})
    }

    const course = await course.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if(!course) {
        return res.status(404).json({error: "Course not Found!"})
    }

    res.status(200).json(course)
};

module.exports = {
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse,
    createCourse
};