
// // // routes/boardRoutes.js
// // const express = require('express');
// // const {
// //   getAllBoards,
// //   createBoard,
// //   updateBoard,
// //   deleteBoard,
// // } = require('../controllers/boardController'); // Import controller functions

// // const router = express.Router();

// // // Define API routes
// // router.get('/', getAllBoards);          // GET all boards
// // router.post('/', createBoard);          // POST create a new board
// // router.put('/:id', updateBoard);        // PUT update a board by ID
// // router.delete('/:id', deleteBoard);     // DELETE a board by ID

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const boardController = require('../controllers/boardController');

// // Get a specific board
// router.get('/:id', boardController.getBoard);

// // Create a new board
// router.post('/', boardController.createBoard);

// // Add a new list to a board
// router.post('/:id/lists', boardController.addList);

// // Update a board (e.g., after drag-and-drop)
// router.put('/:id', boardController.updateBoard);

// module.exports = router;


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
