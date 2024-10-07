const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
const PORT = process.env.PORT || 5001;  // Changed 5000 to 5001

app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Veteran Support Backend is Running');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});