const usersController = require('../controllers').users
const teamsController = require('../controllers').teams

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }))

  // users
  app.get('/api/users', usersController.list)
  app.post('/api/users', usersController.create)

  // user
  app.get('/api/user/:id', usersController.listOne)

  // teams
  app.get('/api/teams', teamsController.list)
  app.post('/api/teams', teamsController.create)

  // team
  app.get('/api/team/:id', teamsController.listOne)
  app.get('/api/team/:id/members')
  app.get('/api/team/:id/events')
  // app.get('/api/team/:id/event/:id')
  // app.post('/api/team/:id/event/:id')
  // app.patch('/api/team/:id/event/:id')
  app.get('/api/team/:id/stats')

  // user & teams
  app.get('/api/user/:id/teams', usersController.listTeams)
}