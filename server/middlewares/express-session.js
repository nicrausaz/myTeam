const uuid = require('uuid/v4')
const session = require('express-session')
const FileStore = require('session-file-store')(session);

const expressSession = session({
  genid: (req) => {
    return uuid()
  },
  store: new FileStore(),
  secret: 'zfNxY3Cf5c',
  resave: true,
  saveUninitialized: true
})

module.exports = expressSession