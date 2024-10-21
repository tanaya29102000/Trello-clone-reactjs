// // models/List.js
// const mongoose = require('mongoose');

// const listItemSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String }, // Optional description
// });

// const listSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   items: [listItemSchema], // An array of items in the list
// });

// module.exports = mongoose.model('List', listSchema);

const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cards: [cardSchema],
});

module.exports = mongoose.model("List", listSchema);
