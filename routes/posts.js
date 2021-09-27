const express = require('express');
const router = express.Router();

//load model
const Post = require('../models/Posts');
// thu nghiem
router.get('/add',(req,res)=>{
    res.render('posts/add');
})

module.exports = router;