const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  var token = req.headers['authorization'].replace(/^Bearer\s/, '');
  if (token) {
    console.log('token', token);
    jwt.verify(token, 'secret', (err, decode) => {
      if (err) res.send(err)
      console.log('decode', decode);
    })
    next();
  } else {
    res.json('Authorization is required');
  }
};
