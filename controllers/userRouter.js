
//Import express framework
// const { parse } = require('dotenv/types');
const express = require('express');

//Create router object by system middleware to implement routes
const router = express.Router();

//Import MongoDB modeling tool
const mongoose = require('mongoose');

//Import defined schema
const User = require('./../models/userSchema');

//Import pagination middleware
const pagination = require('./pagination');

//Set response for api/user get request
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome!' });
});


//Get all records
router.get('/users', pagination(User), (req, res) => {
    res.status(200).json(res.paginationResults)
});

//Get one record by id
router.get('/user/:_id', (req, res) => {
    User.findById(req.params._id, (err, user) => {
        if (err) res.status(500).send(err);
        res.status(200).json(user);
    });
});

const determination = (req, res, next) => {
    if (req.body._id === undefined) insertRecord(req, res);
    else updateRecord(req, res);
    next();
}

//Insert a record or update a record
router.post('/users', [determination, pagination(User)], (req, res) => {
    res.status(200).json(res.paginationResults)
});

const deletion = (req, res, next) => {
    deleteRecord(req, res);
    console.log('next');
    next();
};

// Delete a record
router.delete('/users', [deletion, pagination(User)], (req, res) => {
    res.status(200).json(res.paginationResults)
})





function insertRecord(req, res) {
    console.log('insert!');
    console.log(req.body);
    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.gender = req.body.gender;
    user.age = req.body.age;
    user.password = req.body.password;
    user.save(err => {
        if (err) {
            res.status(500).send(err);
        };
    });
}

function updateRecord(req, res) {
    console.log('update!')
    console.log(req.body)
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (err) {
            res.status(500).send(err);
        }
    });
}

function deleteRecord(req, res) {
    console.log('delete!')
    console.log(req.query)
    User.findOneAndRemove({ _id: req.query._id }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
    });
};



module.exports = router;