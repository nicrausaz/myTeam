const usersController = require('../controllers').users
const teamsController = require('../controllers').teams

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));

  // users
  app.get('/api/users', usersController.list)
  app.get('/api/user/:id', usersController.listOne)
  app.post('/api/users', usersController.create)

  // teams
  app.get('/api/teams', teamsController.list)
  app.get('/api/team/:id', teamsController.listOne)
  app.post('/api/teams', teamsController.create)

  // user & teams
  app.get('/api/user/:id/teams', usersController.listTeams)
};