
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
router.get('/users/:page/:limit/', pagination(User), (req, res) => {
    res.status(200).json(res.paginationResults)
});

//Get one record by id
router.get('/user/:user_id', (req, res) => {
    User.findById(req.params.user_id, (err, user) => {
        if (err) res.status(500).send(err);
        res.status(200).json(user);
    });
});

//Insert a record or update a record
router.post('/users', (req, res) => {
    if (req.body._id === "") insertRecord(req, res);
    else updateRecord(req, res);
});

//Delete a record
router.delete('/user/:user_id', (req, res) => {
    User.findOneAndRemove({ _id: req.params.user_id }, (err, user) => {
        console.log(req.params.user_id)
        if (err) res.status(500).send(err);
        res.status(200).json({ message: 'User deleted!' });
    });
});


function insertRecord(req, res) {
    console.log('insert!')
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
        res.status(200).json({ message: 'User created!' });
    });
}

function updateRecord(req, res) {
    console.log('update!')
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json({ message: 'User updated!' });
    });
}



module.exports = router;