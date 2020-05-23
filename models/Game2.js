//Require Mongoose
const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    Game_number: Number,
    Game_Id: Number,
    count: Number
});

// Compile model from schema
module.exports = mongoose.model('Game2', schema , 'collection2');
