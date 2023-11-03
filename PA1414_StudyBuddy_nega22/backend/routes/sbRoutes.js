const express = require('express');
const router = express.Router();
const {
    getSubjects,
    getSubject,
    deleteSubject,
    updateSubject,
    createSubject
} = require('../controllers/modelController');

// GET whole catalog
router.get("/", getSubjects);

// GET single subject
router.get("/:id", getSubject);

// POST a new subject
router.post("/", createSubject);

// DELETE a subject
router.delete("/:id", deleteSubject);

// UPDATE a subject
router.patch("/:id", updateSubject);

module.exports = router;