// // // controllers/boardController.js
// // const Board = require('../models/Board');

// // // Get all boards
// // exports.getAllBoards = async (req, res) => {
// //   try {
// //     const boards = await Board.find();
// //     res.json(boards);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching boards', error });
// //   }
// // };

// // // Create a new board
// // exports.createBoard = async (req, res) => {
// //   try {
// //     const newBoard = new Board(req.body);
// //     await newBoard.save();
// //     res.json(newBoard);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error creating board', error });
// //   }
// // };

// // // Update a board by ID
// // exports.updateBoard = async (req, res) => {
// //   try {
// //     const updatedBoard = await Board.findByIdAndUpdate(req.params.id, req.body, { new: true });
// //     res.json(updatedBoard);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error updating board', error });
// //   }
// // };

// // // Delete a board by ID
// // exports.deleteBoard = async (req, res) => {
// //   try {
// //     await Board.findByIdAndDelete(req.params.id);
// //     res.json({ message: 'Board deleted' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error deleting board', error });
// //   }
// // };

// const Board = require('../models/Board');

// // Get a board by ID
// exports.getBoard = async (req, res) => {
//   try {
//     const board = await Board.findById(req.params.id);
//     if (!board) return res.status(404).send('Board not found');
//     res.json(board);
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };

// // Create a new board
// exports.createBoard = async (req, res) => {
//   const { title } = req.body;
//   const newBoard = new Board({ title, lists: [] });
//   await newBoard.save();
//   res.status(201).json(newBoard);
// };

// // Add a list to a board
// exports.addList = async (req, res) => {
//   const { title } = req.body;
//   try {
//     const board = await Board.findById(req.params.id);
//     if (!board) return res.status(404).send('Board not found');

//     board.lists.push({ title, cards: [] });
//     await board.save();
//     res.json(board);
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };

// // Update the board (e.g., for drag-and-drop updates)
// exports.updateBoard = async (req, res) => {
//   try {
//     const board = await Board.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!board) return res.status(404).send('Board not found');
//     res.json(board);
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };

// controllers/boardController.js
const Board = require('../models/Board');

// Get all boards
exports.getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching boards', error });
  }
};

// Create a new board
exports.createBoard = async (req, res) => {
  try {
    const newBoard = new Board(req.body);
    await newBoard.save();
    res.json(newBoard);
  } catch (error) {
    res.status(500).json({ message: 'Error creating board', error });
  }
};

// Update a board by ID
exports.updateBoard = async (req, res) => {
  try {
    const updatedBoard = await Board.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBoard);
  } catch (error) {
    res.status(500).json({ message: 'Error updating board', error });
  }
};

// Delete a board by ID
exports.deleteBoard = async (req, res) => {
  try {
    await Board.findByIdAndDelete(req.params.id);
    res.json({ message: 'Board deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting board', error });
  }
};
