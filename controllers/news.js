const News = require('../models/news')

exports.getIndex = (req, res, next) => {
  News.findAll().then(news_ => {
    res.render('news/index', {
      resultBusca: null,
      news: news_,
      pageTitle: 'Dev News',
      path: '/'
    });
  }).catch(err => {
    console.log(err);
  })
};

exports.postNewsBusca = (req, res, next) => {
  const busca_ = req.body.news_busca
  News.findAll().then(news_ => {
    const filterNews = news_.filter( news => news.title.includes(busca_) || news.desc.includes(busca_))
    res.render('news/index', {
      resultBusca: busca_,
      news: filterNews,
      pageTitle: 'Dev News',
      path: '/'
    });
    console.log('Busca: ',req.body.news_busca,'filtro: ',filterNews[0].title);
  }).catch(err => {
    console.log(err);
  })
}