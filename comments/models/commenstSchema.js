const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    
    postId: { // Reference to the post
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Comments = mongoose.model('Comment', CommentSchema);
module.exports = { Comments };
