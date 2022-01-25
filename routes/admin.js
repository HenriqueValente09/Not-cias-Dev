const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/news-create', adminController.getNewsCreate);

module.exports = router;