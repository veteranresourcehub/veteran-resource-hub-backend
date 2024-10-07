const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

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
