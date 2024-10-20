
// routes/boardRoutes.js
const express = require('express');
const {
  getAllBoards,
  createBoard,
  updateBoard,
  deleteBoard,
} = require('../controllers/boardController'); // Import controller functions

const router = express.Router();

// Define API routes
router.get('/', getAllBoards);          // GET all boards
router.post('/', createBoard);          // POST create a new board
router.put('/:id', updateBoard);        // PUT update a board by ID
router.delete('/:id', deleteBoard);     // DELETE a board by ID

module.exports = router;
