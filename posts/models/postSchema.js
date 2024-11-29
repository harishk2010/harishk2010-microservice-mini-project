const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    id:{
        type:String,
        required:true

    },
    title:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    }
})

const Posts=mongoose.model("posts",PostSchema)
module.exports={Posts};