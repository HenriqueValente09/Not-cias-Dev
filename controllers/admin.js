const News = require('../models/news')

exports.getCadastrar = (req, res, next) => {
  res.render('admin/cadastrar', {
    editing: false,
    pageTitle: 'Cadastro',
    path: '/cadastrar'
  });
};

exports.getGerenciar = (req, res, next) => {
  News.findAll().then(news_ => {
    res.render('admin/gerenciar', {
      news: news_,
      resultBusca: null,
      pageTitle: 'Gerenciar',
      path: '/gerenciar'
    });
  }).catch(err => {
    console.log(err);
  })
};

exports.postAddNews = (req, res, next) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const desc = req.body.desc
  News.create({
    title: title,
    imageUrl: imageUrl,
    desc: desc
  }).then(result => {
    res.redirect('/admin/cadastrar')
  }).catch(err => {
    console.log(err);
    res.send('erro')
  })
};

exports.postAdminBusca = (req, res, next) => {
  const busca_ = req.body.news_busca
  News.findAll().then(news_ => {
    filterNews = news_.filter(news => (news.title.includes(busca_)) || (news.desc.includes(busca_)))
    console.log(filterNews);
    res.render('admin/gerenciar', {
      resultBusca: busca_,
      news: filterNews,
      pageTitle: 'Gerenciar',
      path: '/gerenciar'
    });
  }).catch(err => {
    console.log(err);
  })
}

exports.getEditNews = (req, res, next) => {
  const editMode = req.query.edit;
  console.log(editMode);
  if (!editMode) {
    return res.redirect('/');
  }
  const newsId = req.params.newsId;
  News.findByPk(newsId).then(news => {
    if (!news) {
      return res.redirect('/');
    }
    res.render('admin/cadastrar', {
      pageTitle: 'Editar Notícia',
      path: '/admin/cadastrar',
      editing: editMode,
      news_: news
    });
  }).catch(err => {
    console.log(err);
  })
};

exports.postEditNews = (req, res, next) => {
  const newsId = req.body.newsId
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const desc = req.body.desc
  News.findByPk(newsId).then(news_ => {
    news_.update({
      title: title,
      imageUrl: imageUrl,
      desc: desc
    })
  }).catch(err => {
    console.log(err);
  })
  setTimeout(function() {
    res.redirect('/admin/gerenciar');
  }, 300);
};

exports.postDeleteNews = (req, res, next) => {
  const newsId = req.body.newsId;
  News.findByPk(newsId).then(news_ => {
    news_.destroy()
  }).catch(err => {
    console.log(err);
  })
  setTimeout(function() {
    res.redirect('/admin/gerenciar');
  }, 300);
}