const express = require('express');
const router = express.Router();
const {
    getDecks,
    getDeck,
    deleteDeck,
    updateDeck,
    createDeck
} = require('../controllers/deckController');

// GET whole catalog
router.get("/", getDecks);

// GET single subject
router.get("/:id", getDeck);

// POST a new subject
router.post("/", createDeck);

// DELETE a subject
router.delete("/:id", deleteDeck);

// UPDATE a subject
router.patch("/:id", updateDeck);

module.exports = router;