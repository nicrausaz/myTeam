const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const expressSession = require('./server/middlewares/express-session')
const passport = require('passport');
require('./server/middlewares/passport')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressSession)
app.use(passport.initialize());
app.use(passport.session())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (info) { return res.send(info.message) }
    if (err) { return next(err); }
    if (!user) { return res.redirect('/api/login'); }
    req.login(user, (err) => {
      if (err) { return next(err); }
      return res.send(user)
    })
  })(req, res, next);
})

// app.get('/api/authrequired', (req, res) => {
//   console.log('test')
//   if (req.isAuthenticated()) {
//     res.send('you hit the authentication endpoint\n')
//   } else {
//     res.redirect('/')
//   }
// })

app.get('/api/logout', function (req, res) {
  req.session.destroy(function (err) {
    res.send('logout');
  });
});

// routes
require('./server/routes')(app);

module.exports = app;