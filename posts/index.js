const axios = require('axios');
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./DB/conncetion');
const app = express();
connectDB();


app.use(cors());
app.use(express.json());
let { Posts } = require('./models/postSchema')
const port = 3000

app.get('/posts', async (req, res) => {
    try {
        Posts.find().then((data) => {
            res.status(200).json(data)
        })

    } catch (error) {
        res.status(500).json({ error: 'Failed to send data', details: error.message });
    }
})
app.post('/posts', async (req, res) => {
    try {
        const response = req.body
        console.log(response)
        let postData = await Posts.create(response)


        await axios.post('http://localhost:4000/notify', {
            message: response.name,
            PORT: response.port
        })

        res.status(200).json({ status: "DOne" })
    } catch (error) {

    }
})

// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});
