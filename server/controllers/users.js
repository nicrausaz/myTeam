const User = require('../models').user
const Team = require('../models').team

module.exports = {
  create(req, res) {
    return User
      .create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        birthdate: req.body.birthdate,
        size: req.body.size,
        weight: req.body.weight,
        role: req.body.role,
        licenceNumber: req.body.licenceNumber,
        jerseyNumber: req.body.jerseyNumber,
        playRole: req.body.playRole
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Team,
          as: 'teams',
          attributes: ['id', 'fullname']
        }],
      })
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
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  }
}
