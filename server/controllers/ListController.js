// controllers/listController.js
const List = require('../models/List');

// Get all lists
exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lists', error });
  }
};

// Create a new list
exports.createList = async (req, res) => {
  try {
    const newList = new List(req.body);
    await newList.save();
    res.json(newList);
  } catch (error) {
    res.status(500).json({ message: 'Error creating list', error });
  }
};

// Update a list by ID
exports.updateList = async (req, res) => {
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedList) {
      return res.status(404).json({ message: 'List not found' });
    }
    res.json(updatedList);
  } catch (error) {
    res.status(500).json({ message: 'Error updating list', error });
  }
};

// Delete a list by ID
exports.deleteList = async (req, res) => {
  try {
    const deletedList = await List.findByIdAndDelete(req.params.id);
    if (!deletedList) {
      return res.status(404).json({ message: 'List not found' });
    }
    res.json({ message: 'List deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting list', error });
  }
};
