const express=require("express")
const {  connectDB } = require('./DB/conncetion');
const app = express();
connectDB();

const axios=require('axios')
app.use(express.json())
const cors = require("cors");
app.use(cors()); // This allows all incoming requests from any origin. You can restrict it further if needed.

let notifications=[]

app.get('/',(req,res)=>{
    res.status(200).send(notifications)
    
})

app.post('/notify',(req,res)=>{
    const {message,PORT}=req.body
    notifications.push({message,PORT})
    console.log(`Got the message ${message} from ${PORT} `)
    res.status(200).json({status:"recieved"})
})


app.listen(4000,()=>{
    console.log("server is running at http://localhost:4000")
})


