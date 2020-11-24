// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb+srv://estella:estelladb@usermanagement.sg1zo.mongodb.net/<dbname>?retryWrites=true&w=majority";
// require('./user.model');

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
//     if (err) throw err;
//     else console.log("Database created!");
//     // db.close();
// });

const url = process.env.MONGODB_URI;
require('./user.model');
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err);
    else console.log('DB connected!')
})

