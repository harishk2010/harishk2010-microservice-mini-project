const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse incoming JSON payloads


// Route to handle GET requests
app.get('/posts', async (req, res) => {
    try {
        // Perform POST request to another server
        const response = await axios.post('http://localhost:5175/', {
            name: 'john',
            red: true,
        });
        res.json({
            message: 'Data sent successfully to http://localhost:5175/',
            serverResponse: response.data,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send data', details: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
