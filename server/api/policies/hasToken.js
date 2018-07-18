const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  var token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'secret').then((err, decode) => {
      console.log('decode', decode);
    });
    next();
  } else {
    res.json('Authorization is required');
  }
};
