
//Import defined schema
require('./userSchema');

//Configure database identifier
const uri = process.env.MONGODB_URI;

//Import MongoDB modeling tool
const mongoose = require('mongoose');

//Connect database through user request identifier
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//Create connection and error handling
let db = mongoose.connection;
db.on('error', err => console.log(err));
db.on('open', () => console.log('database connected'));
db.on('close', () => console.log('database disconnected'));

