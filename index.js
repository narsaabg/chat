const express = require('express');
const env = require('dotenv').config();
const app = express();
const path = require('path');

//import methods 
const {generateText} = require('./openAiController');

// used for routing
const router = express.Router();

// env file variables
const port = process.env.PORT;
const apiKey = process.env.OPENAI_API_KEY;

// to accept data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// to show static pages
app.use(express.static(path.join(__dirname,'public')));
//creating routes
router.post('/generateText',generateText);

//using routes
app.use('/openai',router);

app.listen(port);
