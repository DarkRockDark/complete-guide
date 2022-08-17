const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('in admin/add-product');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    console.log(req.body.title + ' logged');
    res.redirect('/');
});

module.exports = router;