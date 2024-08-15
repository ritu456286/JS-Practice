const express = require('express');
const router = express.Router();

router.use((req, res, next) =>{
    if(req.query.isAdmin){
        next();
    }else{
        res.send("you are not an admin");
    }
})

router.get('/secret', (req, res) => {
    res.send("secret revealed")
});

router.get('/show', (req, res) =>{
    res.send("showing employee data");
})

module.exports = router;