const express = require('express')
const User = require('../../models/user')
const router = express.Router()

router.post('/', function (req, res) {
  User
    .findOne({
      where: { studentID: req.body.studentID }
    })
    .then(user => {
      res.json(user)
    })
})

module.exports = router
