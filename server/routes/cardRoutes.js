// // routes/cardRoutes.js
// const express = require('express');
// const {
//   getAllCards,
//   createCard,
//   updateCard,
//   deleteCard,
// } = require('../controllers/cardController'); // Import controller functions

// const router = express.Router();

// // Define API routes
// router.get('/:listId/cards', getAllCards);          // GET all cards in a list
// router.post('/:listId/cards', createCard);          // POST create a new card in a list
// router.put('/:listId/cards/:cardId', updateCard);   // PUT update a card by ID in a list
// router.delete('/:listId/cards/:cardId', deleteCard); // DELETE a card by ID in a list

// module.exports = router;

// routes/cardRoutes.js
const express = require('express');
const {
  getAllCards,
  createCard,
  updateCard,
  deleteCard,
} = require('../controllers/cardController'); // Import controller functions

const router = express.Router();

// Define API routes
router.get('/:listId/cards', getAllCards);          // GET all cards in a list
router.post('/:listId/cards', createCard);          // POST create a new card in a list
router.put('/:listId/cards/:cardId', updateCard);   // PUT update a card by ID in a list
router.delete('/:listId/cards/:cardId', deleteCard); // DELETE a card by ID in a list

module.exports = router;
