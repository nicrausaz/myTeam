const User = require('../models').User

module.exports = {
  create(req, res) {
    return User
      .create({
        fullName: req.body.fullName,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return User
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  listOne(req, res) {
    return User
      .findByPk(req.params.id)
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
  listTeams(req, res) {
    return User
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  }
}
