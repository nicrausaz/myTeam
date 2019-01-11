const Team = require('../models').Team

module.exports = {
  create(req, res) {
    return Team
      .create({
        firstName: req.body.firstName,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Team
      .all()
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
