//Import express framework
const express = require("express");

//Configure enviroument variables
const dotenv = require('dotenv').config()

//Create application objects
const app = express();

// System middleware
app.use(express.json()); //Used body to JSON 
app.use(express.urlencoded({ extended: true })) //Parse URL to JSON


//Third party middlewares
const cors = require('cors')
app.use(cors());

//Model holds data
require('./models/db');

//Customized middleware: controller/router handler

//Import a defined router object
const userRouter = require('./controllers/userRouter');

//Use a defined router
app.use('/api/usermanagement', userRouter);



//Define port and create server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});