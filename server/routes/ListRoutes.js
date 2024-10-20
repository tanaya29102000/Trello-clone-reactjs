// routes/listRoutes.js
const express = require('express');
const {
  getAllLists,
  createList,
  updateList,
  deleteList,
} = require('../controllers/listController'); // Import controller functions

const router = express.Router();

// Define API routes
router.get('/', getAllLists);          // GET all lists
router.post('/', createList);          // POST create a new list
router.put('/:id', updateList);        // PUT update a list by ID
router.delete('/:id', deleteList);     // DELETE a list by ID

module.exports = router;
