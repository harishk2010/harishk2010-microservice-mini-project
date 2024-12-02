const express = require("express")
const app = express()
const cors = require('cors')
const axios = require('axios')
const { connectDB } = require("./DB/conncetion")
connectDB()
const { Comments } = require('./models/commenstSchema')
const port = 2000
app.use(express.json())
app.use(cors())

app.get('/comment', (req, res) => {
    Comments.find().lean().then((data) => {
        res.status(200).json(data)
    })

})
app.get('/comment/:id', (req, res) => {

    Comments.find({ postId: req.params.id }).then((data) => {
        res.status(200).json(data)
    })

})

//post comment
app.post('/comment', async (req, res) => {
    const { postId, content } = req.body
    console.log(postId, content)
    const comment = await Comments.create({ postId, content })
    await axios.post('http://localhost:4000/notify', {
        postId: postId,
        from: "comments"
    })
    res.status(200).json({ status: "comment done" })
})

app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})