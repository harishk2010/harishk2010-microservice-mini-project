const express=require("express")
const app=express()
const cors=require('cors')
const axios=require('axios')
const { connectDB } = require("./DB/conncetion")
connectDB()
const {Comments}=require('./models/commenstSchema')
const port = 2000
app.use(express.json())
app.use(cors())

app.get('/comment',(req,res)=>{
    Comments.find().then((data)=>{
        res.status(200).json(data)
        })
})
//post comment
app.post('/comment',async(req,res)=>{
    const {id,postId,content}=req.body
    const comment = await Comments.create({id,postId,content})
    await axios.post('http://localhost:4000/notify',{
        postId:postId,
        from:"comments"
    })
    res.status(200).json({status:"comment done"})
})

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})