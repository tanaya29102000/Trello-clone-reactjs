// // const User = require('../models/User');
// // const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');

// // exports.signup = async (req, res) => {
// //   const { name, email, password } = req.body;
// //   try {
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = new User({ name, email, password: hashedPassword });
// //     await user.save();
// //     res.status(201).send('User created successfully');
// //   } catch (error) {
// //     res.status(400).send('Error creating user');
// //   }
// // };

// // exports.login = async (req, res) => {
// //   const { email, password } = req.body;
// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(404).send('User not found');
    
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(401).send('Invalid password');

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.json({ token });
// //   } catch (error) {
// //     res.status(400).send('Error logging in');
// //   }
// // };
// // controllers/userController.js
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// // Signup Logic
// exports.signup = async (req, res) => {
//   const { email } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).send('Email already registered');

//     const user = new User({ email });
//     await user.save();
//     res.status(201).send('User created successfully');
//   } catch (error) {
//     res.status(500).send('Error creating user');
//   }
// };

// // Login Logic
// exports.login = async (req, res) => {
//   const { email } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).send('User not found');

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).send('Error logging in');
//   }
// };
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('Email already registered');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid password');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Error logging in');
  }
};
