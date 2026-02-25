// backend/server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// --- Middleware ---
// Secure HTTP headers
app.use(helmet()); 
// Log incoming requests
app.use(morgan('dev')); 
// Enable Cross-Origin Resource Sharing (allow your frontend to talk to your backend)
app.use(cors()); 
// Parse incoming JSON payloads
app.use(express.json()); 

// --- Basic Health Check Route ---
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running smoothly.' });
});

// --- Server Initialization ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});