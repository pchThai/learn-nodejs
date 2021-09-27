const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Create model
const postSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true
    },
    date: {
        type:Date,
        default:Date.now
    }
})

const Posts = mongoose.model('Post', postSchema);
module.exports = Posts;