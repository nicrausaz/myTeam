const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const expressSession = require('./server/middlewares/express-session')
const passport = require('passport');
require('./server/middlewares/passport')(passport)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

require('./server/middlewares/cors')

// routes
require('./server/routes')(app, passport);

module.exports = app;