const express = require('express');
const router = express.Router();

//load model
const Post = require('../models/Posts')
// thu nghiem
router.get('/',(req,res)=>{
    res.send('Day la post router')
})

module.exports = router;