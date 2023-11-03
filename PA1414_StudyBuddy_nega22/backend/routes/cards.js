const express = require('express');
const router = express.Router();
const {
    getCards,
    getDeckCards,
    getCard,
    deleteCard,
    updateCard,
    createCard
} = require('../controllers/cardController');

// GET whole catalog
router.get("/", getCards);

// GET all cards in deck
router.get("/deck/:id", getDeckCards);

// GET single card
router.get("/:id", getCard);

// POST a new card
router.post("/", createCard);

// DELETE a card
router.delete("/:id", deleteCard);

// UPDATE a card
router.patch("/:id", updateCard);

module.exports = router;