//dotenv
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
//import router
const posts = require('./routes/posts');
//start app
const app = express();
//start handlebars midleware
app.engine('handlebars',exphbs());
//start bordyParser midleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine','handlebars');
//ket noi Datbase
const {connectDB} = require('./config/db');
const req = require('express/lib/request');
connectDB();


//Main 
app.get('/',(req, res) => res.render('index.handlebars'));
app.get('/about',(req, res) => res.render('about'));
app.use('/posts',posts)

//Khoi dong express midleware
app.use(express.json());
const PORT = process.env.APP_PORT;
app.listen(PORT,() => console.log(`Server run on port: ${PORT}`));