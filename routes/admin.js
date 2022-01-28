const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/cadastrar', adminController.getCadastrar);

router.post('/addNews', adminController.postAddNews);

module.exports = router;