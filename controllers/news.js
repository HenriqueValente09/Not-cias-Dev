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
    filterNews = news_.filter( news => (news.title.includes(busca_)) || (news.desc.includes(busca_)))
    res.render('news/index', {
      resultBusca: busca_,
      news: filterNews,
      pageTitle: 'Dev News',
      path: '/'
    });
  }).catch(err => {
    console.log(err);
  })
}

exports.getNewsId = (req, res, next) => {
  const newsId = req.params.newsId;
  News.findByPk(newsId).then(news_ => {
    res.render('news/news-detail', {
      news_: news_,
      pageTitle: news_.title,
      path: '/news-detail'
    })
  }).catch(err => {
    console.log(err);
  })

}