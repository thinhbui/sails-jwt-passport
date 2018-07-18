/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: (req, res) => {
    Articles.create({
      ...req.body
    }).fetch().exec((err, article) => {
      if (err) res.send('Database error: ' + err)
      res.json(article);
    })
  },
  update: (req, res) => {
    Articles.update({
      ...req.body
    }).fetch().exec((err, article) => {
      if (err) res.send('Database error: ' + err)
      res.json(article);
    })
  },
  delete: (req, res) => {
    const id = parseInt(req.params.id);
    console.log('delete', id);
    Articles.destroy({
      id
    }).fetch().exec((err, article) => {
      if (err) res.send('Database error: ' + err)
      res.json({
        success: true
      });
    })
  },
  getAll: (req, res) => {
    Articles.find({}).exec((err, articles) => {
      // console.log('articles', articles);
      if (err) res.send('Database error: ' + err)
      res.json(articles);
    })
  }
};
