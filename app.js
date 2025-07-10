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

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

/*const options = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

https.createServer(options, app).listen(4430, () => {
    console.log('Express HTTPS server running at https://localhost:4430');
});  */