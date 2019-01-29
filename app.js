const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express()
const session = require('express-session')
const expressSession = require('./server/middlewares/express-session')

const passport = require('passport');
require('./server/middlewares/passport')(passport)

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// console.dir(expressSession())

// app.use(expressSession);
app.use(session({ secret: 'keyboardcat' }));
app.use(passport.initialize());
app.use(passport.session());

require('./server/middlewares/cors')(app);

// routes
require('./server/routes')(app, passport);

module.exports = app;