const express = require('express');
const axios = require('axios'); // For sending the webhook
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Hello, Node.js app is running!');
});

// Sample GET route
app.get('/api/message', (req, res) => {
    res.json({ message: 'This is your API response!' });
});

// Webhook POST route
app.post('/entrycreate', async (req, res) => {
    const { payload } = req.body;
    console.log("payload >>> ", payload)

});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
