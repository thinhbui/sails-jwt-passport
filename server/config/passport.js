const passport = require('passport');
const LocalStratrgy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcrypt-nodejs');
const SECRET_KEY = 'secret';
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;

//Serialize the User
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

//Local
passport.use(
  new LocalStratrgy({
      usernameField: 'email',
      passportField: 'password'
    },
    (username, password, cb) => {
      console.log(username, password);

      Users.findOne({
        email: username
      }).exec((err, user) => {
        if (err) return cb(err);
        if (!user) {
          return cb(null, false, {
            message: 'email not found'
          });
        }
        if (password !== user.password) {
          return cb(null, false, {
            message: 'Invalid Password'
          });
        }
        return cb(null, user, {
          message: 'Login Succesful'
        });
      });
    }
  )
);
