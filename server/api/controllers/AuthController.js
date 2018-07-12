/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
  login: (req, res) => {
    passport.authenticate('local', function (err, user, info) {
      console.log('user', user);
      console.log('info', user);
      if ((err) || (!user)) {
        return res.send({
          message: info,
          user
        });
      }

      req.login(user, (err) => {
        if (err) res.send(err);
        jwt.sign(
          user,
          'secret', {
            expiresIn: 3600 * 6
          },
          (err, token) => {
            res.json({
              message: info,
              user,
              token: 'Bearer ' + token
            });
          }
        );
      });
    })(req, res);
  },
  register: (req, res) => {

  }
};
