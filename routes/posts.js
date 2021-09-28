const express = require('express');
const Posts = require('../models/Posts');
const router = express.Router();

//load model
const Post = require('../models/Posts');
// thu nghiem
router.get('/add',(req,res)=>{
    res.render('posts/add');
})
//Create new post
router.post('/', async(req,res)=>{
    const {title, text} = req.body;
    let errors = [];
    if(!title)  erros.push({msg: 'Title required'});
    if(!text) erros.push({msg: 'Text required'});
    if(errors.length >0) res.render('posts/add',{title,text});
    else{
        const newPostData = {title,text};
        const newPost = new Post(newPostData);
        await newPost.save();
        res.redirect('/posts');
    }
})
module.exports = router;