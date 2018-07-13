const passport = require("passport");
const LocalStratrgy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = {
  SECRET_KEY = "secret"
}
const JWT_STRATEGY_CONFIG = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY
  // issuer:
};

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

//Deserialize the User
passport.deserializeUser((id, cb) => {
  Users.findOne({
    id
  }).exec((err, user) => {
    cb(err, user);
  });
});
/**
 * Triggers when user authenticates via JWT strategy
 * @param {Object} payload Decoded payload from JWT
 * @param {Function} next Callback
 * @private
 */
function _onJwtStrategyAuth(payload, next) {
  var user = payload.user;
  console.log("_onJwtStrategyAuth", user);

  return next(null, user, {});
}

//Local
// passport.use(
//   new LocalStratrgy({
//       usernameField: 'email',
//       passportField: 'password'
//     },
//     (username, password, cb) => {
//       console.log(username, password);

//       Users.findOne({
//         email: username
//       }).exec((err, user) => {
//         if (err) return cb(err);
//         if (!user) {
//           return cb(null, false, {
//             message: 'email not found'
//           });
//         }
//         if (password !== user.password) {
//           return cb(null, false, {
//             message: 'Invalid Password'
//           });
//         }
//         return cb(null, user, {
//           message: 'Login Succesful'
//         });
//       });
//     }
//   )
// );

passport.use(
  new JwtStrategy(JWT_STRATEGY_CONFIG, (jwt_payload, done) => {
    sails.log.info("jwt_payload", jwt_payload);
    Users.findOne({
        id: jwt_payload.id
      })
      .exec(user => {
        sails.log.info("user", user);

        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
    // .catch(err => sails.log(err));
  })
);
