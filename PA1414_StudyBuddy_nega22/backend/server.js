require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
// Route files
const subjectsRoute = require('./routes/subjects');
const coursesRoute = require('./routes/courses');
const decksRoute = require('./routes/decks');
const cardsRoute = require('./routes/cards');

// Study Buddy Express App
const sb_app = express();

// Middleware
sb_app.use(express.json());
// sb_app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
// });
sb_app.use(
    cors()
        );

// Routes
sb_app.use('/api/catalog', subjectsRoute);
sb_app.use('/api/courses', coursesRoute);
sb_app.use('/api/decks', decksRoute);
sb_app.use('/api/cards', cardsRoute);

// Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the Database!');
        // Listen for requests
        sb_app.listen(process.env.PORT, () => {
            console.log('Listening on port: ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
