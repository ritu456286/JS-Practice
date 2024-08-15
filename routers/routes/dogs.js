const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Homepage");
})
router.get('/about', (req, res) => {
    res.send("about page");
})
router.get('/:id', (req, res) => {
    res.send("show page")
})
router.get('/:id/edit', (req, res) => {
    res.send("edit page form")
})
router.put('/:id/edit', (req, res) => {
    res.send("edit page");
})

module.exports = router;