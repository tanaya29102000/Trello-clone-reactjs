
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const boardRoutes = require('./routes/boardRoutes'); // Import routes
const listRoutes = require('./routes/ListRoutes');
// const cardRoutes = require('./routes/cardRoutes');
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/users', userRoutes);
// Use routes
app.use('/api/board', boardRoutes);

app.use('/api/lists', listRoutes);
// app.use('/api/cards', cardRoutes); // Card routes already have listId in the path

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
