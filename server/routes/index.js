const usersController = require('../controllers').users
const teamsController = require('../controllers').teams

const checkAuthentification = (req, res, next) => {
  console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    next()
  } else {
    res.send('err')
  }
}

module.exports = (app, passport) => {
  // users
  app.get('/api/users', usersController.list)
  // app.post('/api/users', usersController.create)

  app.get('/api/user', checkAuthentification, (req, res) => {
    // console.log(req.user)
    res.send(req.user);
  })

  // // user
  // app.get('/api/user/:id', usersController.listOne)

  // // teams
  // app.get('/api/teams', teamsController.list)
  // app.post('/api/teams', teamsController.create)

  // // team
  // app.get('/api/team/:id/members')
  // app.get('/api/team/:id/events')
  // // app.get('/api/team/:id/event/:id')
  // // app.post('/api/team/:id/event/:id')
  // // app.patch('/api/team/:id/event/:id')
  // // app.get('/api/team/:id/stats')

  // // user & teams
  // app.get('/api/user/:id/teams', usersController.listTeams)

  // get user's data
  app.get('/api/user/:id', usersController.listOne)
  // update user data
  app.patch('/api/user/:id', usersController.update)
  // new user
  app.post('/api/user/:id', usersController.create)

  // get user's team

  // get team data
  app.get('/api/team/:id', teamsController.listOne)
  // update team
  app.patch('/api/team/:id', teamsController.update)
  // delete team
  app.delete('/api/team/:id', teamsController.delete)

  // get team's players
  app.get('/api/team/:id/users', teamsController.getUsers)

  // get team's events
  // app.get('/api/team/:id/events', teamsController.getUsers)

  // get team's stats

  // get team's event

  // user login
  app.post('/api/login', passport.authenticate('login', { successRedirect: '/api/user' }));
  // , failureRedirect: '/api/login'

  // user logout
  app.get('/api/logout', (req, res) => {
    req.session.destroy(function (err) {
      req.logout();
      res.send(null)
    });
  });

  // 404
  app.get('*', (req, res) => res.status(404).send({ message: '404' }))
}