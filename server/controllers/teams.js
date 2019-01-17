const Team = require('../models').team
const User = require('../models').user

module.exports = {
  create(req, res) {
    return Team
      .create({
        uniqueId: req.body.uniqueId,
        fullname: req.body.fullname,
        shortname: req.body.shortname,
        sport: req.body.sport
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },
  listOne(req, res) {
    return Team
      .findByPk(req.params.id)
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  getUsers(req, res) {
    return Team
      .findAll({
        include: [{
          model: User,
          as: 'users',
          attributes: ['firstname', 'lastname', 'email', 'phone', 'playRole', 'jerseyNumber']
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
    return Team
      .update({
        uniqueId: req.body.uniqueId,
        fullname: req.body.fullname,
        shortname: req.body.shortname,
        sport: req.body.sport
      },
        {
          where: { id: req.params.id }
        })
      .catch(error => res.status(400).send(error))
  },
  delete(req, res) {

  }
}
