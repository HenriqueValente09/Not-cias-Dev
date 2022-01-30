const express = require('express');

const newsController = require('../controllers/news');

const router = express.Router();

router.get('/', newsController.getIndex);

router.post('/news-busca', newsController.postNewsBusca);

router.get('/news-detail/:newsId', newsController.getNewsId);

module.exports = router;
