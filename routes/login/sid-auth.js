const express = require('express')
const User = require('../../models/user')
const router = express.Router()

router.post('/', function (req, res) {
  if (req.body.studentID === process.env.TESTER_ID) {
    res.json(req.body)
  } else {
    User
      .findOne({
        where: { studentID: req.body.studentID }
      })
      .then(user => {
        if (!!user)
          res.json(user)
        else
          // the student is not registered in the exchange program
          res.sendStatus(400)
      })
  }
})

module.exports = router
