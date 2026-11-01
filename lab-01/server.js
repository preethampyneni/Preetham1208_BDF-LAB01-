/**
 * Lab 1: Node.js and Express Server
 * Course: Backend Development Fundamentals
 * Student Name: PYNENI PREETHAM CHOWDARY
 * Registration Number: 252U1R1208
 * Section: CSE-2D & 214(S-19)
 */

// Step 1: Import the Express library
const express = require('express');

// Step 2: Initialize the Express application
const app = express();

// Step 3: Define the port number (default 3000 or from environment variable)
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data (best practice)
app.use(express.json());

/**
 * Route: GET /
 * Description: Root endpoint returning a welcome message
 * HTTP Status: 200 OK
 */
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Backend Development Fundamentals - Lab 01!');
});

/**
 * Route: GET /about
 * Description: Returns student details in JSON format
 * HTTP Status: 200 OK
 */
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'PYNENI PREETHAM CHOWDARY',
    registrationNumber: '252U1R1208',
    section: 'CSE-2D & 214(S-19)'
  });
});

/**
 * Route: GET /time
 * Description: Returns current server date and time using JavaScript new Date()
 * HTTP Status: 200 OK
 */
app.get('/time', (req, res) => {
  const now = new Date();
  res.status(200).json({
    currentTime: now.toString(),
    iso: now.toISOString(),
    date: now.toDateString(),
    time: now.toLocaleTimeString()
  });
});

/**
 * Route: Unknown / Catch-All Routes
 * Description: Handles any undefined route and returns a 404 status code
 * HTTP Status: 404 Not Found
 */
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

/**
 * Step 4: Start the server and listen for incoming connections
 */
app.listen(PORT, () => {
  console.log(`Server is running successfully on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server.`);
});

