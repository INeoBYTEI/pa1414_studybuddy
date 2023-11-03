const Card = require('../models/cardModel');
const mongoose = require('mongoose');

// Get all Cards
const getCards = async (req, res) => {
    const cards = await Card.find({}).sort({createdAt: 1});
    res.status(200).json(cards);
};

// Get all Cards of a specific Deck
const getDeckCards = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Card ID invalid"})
    }
    const cards = await Card.find({deck_ID: new mongoose.Types.ObjectId(id)}).sort({createdAt: 1});
    res.status(200).json(cards);
};


// Get a single Card
const getCard = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Card ID invalid"})
    }

    const card = await card.findById(id);
    if(!Card) {
        return res.status(404).json({error: "Card not Found!"})
    }

    res.status(200).json(Card);
};

// Create a new Card
const createCard = async (req, res) => {
    const { deck_ID, term, definition  } = req.body;
    try {
        const card = await Card.create({ deck_ID, term, definition });
        res.status(200).json(card);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Card
const deleteCard = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Card ID invalid"})
    }

    const card = await card.findOneAndDelete({_id: id});
    if(!card) {
        return res.status(404).json({error: "Card not Found!"})
    }

    res.status(200).json(Card);
};

// Update a Card
const updateCard = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Card ID invalid"})
    }

    const card = await card.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if(!card) {
        return res.status(404).json({error: "Card not Found!"})
    }

    res.status(200).json(card)
};

module.exports = {
    getCards,
    getDeckCards,
    getCard,
    deleteCard,
    updateCard,
    createCard
};