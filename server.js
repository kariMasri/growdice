// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  // Accept any username and password
  const { username, password } = req.body;

  // Always return a successful login response
  res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
