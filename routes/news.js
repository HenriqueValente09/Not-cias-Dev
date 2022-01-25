const express = require('express');

const newsController = require('../controllers/news');

const router = express.Router();

router.get('/', newsController.getIndex);

module.exports = router;
