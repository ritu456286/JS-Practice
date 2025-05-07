const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const validUser = await User.findAndValidate(username, password);
    if(validUser){
        req.session.user_id = validUser._id;
        return res.redirect('/secret');
    }
    res.send("Incorrect username or password");
});

module.exports = router;