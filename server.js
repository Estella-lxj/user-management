const express = require("express");
const dotenv = require('dotenv').config()
require('./models/db');

const app = express();
const path = require('path');
const bodyparser = require('body-parser')
app.use(express.json());

const userController = require('./controllers/userController');


app.use('/user', userController);

app.use((req, res) => {
    res.send("404");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});