exports.getIndex = (req, res, next) => {
      res.render('news/index', {
        pageTitle: 'Dev News',
        path: '/'
      });
  };