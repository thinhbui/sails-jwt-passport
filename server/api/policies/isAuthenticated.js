const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', {
    session: false
  }, function (err, user, info) {
    if (err) {
      console.log(err);
      next();
    }
    if (user) {
      req.user = user;
      next();
    } else {
      next();
    }
  })(req, res, next);
};
