const express = require('express');
const router = express.Router();
const {
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse,
    createCourse
} = require('../controllers/courseController');

// GET whole catalog
router.get("/", getCourses);

// GET single subject
router.get("/:id", getCourse);

// POST a new subject
router.post("/", createCourse);

// DELETE a subject
router.delete("/:id", deleteCourse);

// UPDATE a subject
router.patch("/:id", updateCourse);

module.exports = router;