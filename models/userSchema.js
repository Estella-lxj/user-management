
//Import MongoDB modeling tool
const mongoose = require('mongoose');

//A Mongoose schema defines the structure of the document

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    password: {
        type: String
    },
})

//Export defined schema
module.exports = mongoose.model('User', userSchema);

