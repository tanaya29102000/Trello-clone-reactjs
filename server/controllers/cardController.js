// controllers/cardController.js
const List = require('../models/List');

// Get all cards in a list
exports.getAllCards = async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }
    res.json(list.items); // Assuming items are stored in `items` in the List schema
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cards', error });
  }
};

// Create a new card in a list
exports.createCard = async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }
    
    const newCard = req.body; // Assuming req.body contains card details
    list.items.push(newCard); // Assuming items are stored in `items` in the List schema
    await list.save();
    res.json(newCard);
  } catch (error) {
    res.status(500).json({ message: 'Error creating card', error });
  }
};

// Update a card by ID
exports.updateCard = async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    const card = list.items.id(req.params.cardId);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    Object.assign(card, req.body); // Update card details
    await list.save();
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error updating card', error });
  }
};

// Delete a card by ID
exports.deleteCard = async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    const card = list.items.id(req.params.cardId);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    card.remove(); // Remove the card
    await list.save();
    res.json({ message: 'Card deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting card', error });
  }
};
