const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Nothing to see there',
}));

module.exports = app;