const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').user

module.exports = function (passport) {
  passport.use('login', new LocalStrategy({},
    (username, password, done) => {
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

  passport.use('signup', new LocalStrategy({},
    (username, password, done) => {
    //   User.findOne({ where: { username: username } })
    //     .then(function (User) {
    //       if (!User) {
    //         return done(null, false, { message: 'Incorrect username.' });
    //       }
    //       if (!User.password === password) {
    //         return done(null, false, { message: 'Incorrect password.' });
    //       }
    //       return done(null, User);
    //     })
    //     .catch(err => done(err));
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
}