const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { hashPassword } = require('../utils/hashing');

router.get('/', (req, res) =>{
    res.render('register');
})

router.post('/', async(req, res) =>{
    const {username, password } = req.body;
    const newUser = new User({username, password});
    await newUser.save();
    req.session.user_id = newUser._id;
    res.redirect('/secret');
    
})

module.exports = router;