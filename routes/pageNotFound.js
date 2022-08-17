const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'));
});

module.exports = router;