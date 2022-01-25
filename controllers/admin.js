exports.getNewsCreate = (req, res, next) => {
    res.render('news/newsCreate', {
      pageTitle: 'Dev News',
      path: '/newsCreate'
    });
};