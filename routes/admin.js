const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/cadastrar', adminController.getCadastrar);

router.get('/gerenciar', adminController.getGerenciar);

router.post('/news-busca-admin', adminController.postAdminBusca);

router.post('/addNews', adminController.postAddNews);

router.post('/delete-news', adminController.postDeleteNews);

module.exports = router;