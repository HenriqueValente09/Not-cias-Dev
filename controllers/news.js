const News = require('../models/news')

exports.getIndex = (req, res, next) => {
  News.findAll().then(news_ => {
    res.render('news/index', {
      news: news_,
      pageTitle: 'Dev News',
      path: '/'
    });
  }).catch(err => {
    console.log(err);
  })
};