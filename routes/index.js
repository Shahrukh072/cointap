const express = require('express');
const router = express.Router();

// User model 
const User = require('../models/User');


// Welcome Page 
router.get('/', (req, res) => res.render('welcome'));

// HOME GET
var email = "";
router.get('/home', (req, res) => {
    email = req.query.user;
    User.findOne({
        email: req.query.user
    })
        });

module.exports = router;