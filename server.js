//Global VARIABLES
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path')
const cors = require('cors');
const rateLimit = require("express-rate-limit");

//MIDDLEWARE
const apiLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    max: 1,
    message:
    "You can send 1 email every 5 minutes. Please wait a moment."
  });
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, './dist')))
app.use(bodyParser());

//START SERVER / DB
var port = 3030 || process.env.PORT;
app.listen(port, () => console.log(`Server started on port: ${port}`));

// send index file
app.get('/*', (req, res) => {
    res.sendfile('./dist/index.html')
})