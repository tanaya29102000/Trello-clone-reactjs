const express = require('express');
const router = express.Router();

// Dummy route for now
router.get('/', (req, res) => {
  res.json({ message: 'Boards route working!' });
});

module.exports = router;
