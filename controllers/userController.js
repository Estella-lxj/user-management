const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.json('Hello World');
})

router.post('/', (req, res) => {
    if (req.body._id === "") insertRecord(req, res);
    else updateRecord(req, res);
})


router.get('/list', (req, res) => {
    User.find((err, docs) => {
        if (err) console.log(err);
        else res.json(docs);
    })
})

router.get('/delete/:id', (req, res) => {
    User.findOneAndRemove(req.params.id, (err, doc) => {
        if (err) console.log(err);
        else res.redirect('user/list');
        console.log("Document deleted succussfully!");
    })
})

// router.delete('/', (req, res) => {
//     User.deleteOne((err, doc) => {
//         if (err) console.log(err);
//         else res.redirect('user/list');
//         console.log("Document deleted succussfully!");
//     })
// })

function insertRecord(req, res) {
    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.gender = req.body.gender;
    user.age = req.body.age;
    user.save(function (err, doc) {
        if (err) return console.error(err);
        else {
            res.redirect('user/list');
            console.log("Document inserted succussfully!");
        }
    });
}

function updateRecord(req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (err) console.log(err)
        else {
            res.redirect('user/list');
            console.log("Document inserted succussfully!");
        }
    });
}



module.exports = router;