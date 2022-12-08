const express = require('express');
const router = express.Router();

// User model 
const User = require('../models/User')

// Login Page
router.get('/login', (req, res) => res.render('login'));


// Handle 
router.post('/login', (req, res) => {
    const {  email, password } = req.body;
    // Checking user in database
    User.findOne({
        email: email
    }).then(user => {
        if (!user) {
            let errors = [];
            errors.push({ msg: 'This email is not registered' });
            res.render('login', {
                errors,
                password,
                email
            });
        }
        // Redirect to home
        else {
            res.redirect(`/home?user=${user.email}`);
        }
    });

});

// Logout Handle
router.get('/logout', (req, res) => {
    // req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;