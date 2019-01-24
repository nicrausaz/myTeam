const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').user

const strategy = passport.use(new LocalStrategy({},
  (username, password, done) => {
    console.log(username)
    User.findOne({ where: { username: username } })
      .then(function (User) {
        if (!User) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!User.password === password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, User);
      })
      .catch(err => done(err));
  }
))

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  User.findOne({ where: { id: user } })
  .then((user) => {
    done(null, user);
  })
});

module.exports = strategy