const Team = require('../models').team
const User = require('../models').user

module.exports = {
  create(req, res) {
    return Team
      .create({
        uniqueId: req.body.uniqueId,
        fullname: req.body.fullname,
        shortname: req.body.shortname,
        sport: req.body.sport,
        userId: req.body.userId
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Team
      .findAll({
        include: [{
          model: User,
          as: 'users',
          attributes: ['id', 'firstname']
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  listOne(req, res) {
    return Team
      .findByPk(req.params.id)
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  }
}
