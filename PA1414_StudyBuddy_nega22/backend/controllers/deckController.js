const Deck = require('../models/deckModel');
const mongoose = require('mongoose');

// Get all Decks
const getDecks = async (req, res) => {
    const decks = await Deck.find({}).sort({createdAt: 1});
    res.status(200).json(decks);
};
// Get a single deck
const getDeck = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "deck ID invalid"})
    }

    const deck = await Deck.findById(id);
    if(!deck) {
        return res.status(404).json({error: "deck not Found!"})
    }

    res.status(200).json(deck);
};

// Create a new deck
const createDeck = async (req, res) => {
    const { deck_name, course_id } = req.body;
    try {
        const deck = await Deck.create({ deck_name, course_id });
        res.status(200).json(deck);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a deck
const deleteDeck = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "deck ID invalid"})
    }

    const deck = await Deck.findOneAndDelete({_id: id});
    if(!deck) {
        return res.status(404).json({error: "deck not Found!"})
    }

    res.status(200).json(deck);
};

// Update a deck
const updateDeck = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "deck ID invalid"})
    }

    const deck = await Deck.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if(!deck) {
        return res.status(404).json({error: "deck not Found!"})
    }

    res.status(200).json(deck)
};

module.exports = {
    getDecks,
    getDeck,
    deleteDeck,
    updateDeck,
    createDeck
};