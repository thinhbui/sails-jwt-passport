/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require("passport");
const jwt = require('jsonwebtoken');

module.exports = {
  // login: (req, res) => {
  //   passport.authenticate("local", function (err, user, info) {
  //     console.log("user", user);
  //     console.log("info", user);
  //     if (err || !user) {
  //       return res.send({
  //         message: info,
  //         user
  //       });
  //     }
  //     req.login(user, err => {
  //       if (err) res.send(err);
  //       res.json({
  //         message: info,
  //         user
  //       });
  //     });
  //   })(req, res);
  // },
  register: (req, res) => {},
  loginJWT: (req, res) => {
    const {
      email,
      password
    } = req.body;
    Users.findOne({
      email
    }).exec((err, user) => {
      if (user.password === password)
        jwt.sign({
          ...user
        }, 'secret', {
          expiresIn: 3600 * 6
        }, (err, token) => {

          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
      else {
        res.send('Password is not correct');
      }
    })
  },
};
