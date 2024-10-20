// const mongoose = require('mongoose');

// const cardSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, default: '' },
//   position: { type: Number, required: true }, // Helps with DND ordering
// });

// module.exports = mongoose.model('Card', cardSchema);
// models/Cart.js
const mongoose = require('mongoose');

const cardItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' }, // Assuming there's a Product model
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true },
});

const cardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }, // Assuming there's a User model
  items: [cardItemSchema], // An array of items in the cart
  totalAmount: { type: Number, default: 0 }, // Total price of items in the cart
});

module.exports = mongoose.model('Card', cardSchema);
