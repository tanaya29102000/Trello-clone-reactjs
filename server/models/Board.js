// models/Board.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cards: [cardSchema], // Each list contains an array of cards
});

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lists: [listSchema], // A board contains multiple lists
});

module.exports = mongoose.model('Board', boardSchema);
