const News = require('../models/news')

exports.getCadastrar = (req, res, next) => {
    res.render('admin/cadastrar', {
      pageTitle: 'Cadastro',
      path: '/cadastrar',
      errorAlert: 'noError'
    });
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