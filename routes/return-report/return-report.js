/**
 * @openapi
 * /return-report:
 *   get:
 *     summary: Retrieve form data from the db
 *     description: |
 *       TBD
 *     tags:
 *       - applications
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Not enrolled in the exchange program
 *
 */

const express = require('express')
const jwt = require('jsonwebtoken')
const { ReturnReport } = require('../../models/index')
const verifyToken = require('../verify-token')
const router = express.Router()

router.get('/', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.sendStatus(401)
    } else {
      ReturnReport
        .findOne({
          where: { userStudentID: decoded.studentID },
          include: { all: true }
        })
        .then(returnReport => {
          // if not found, user is null
          if (returnReport) {
            const { id, userStudentID, user, ...rest} = returnReport.get({ plain: true })
            res.json({ ...user, ...rest }) // merge two object
          } else {
            ReturnReport
              .create({ userStudentID: decoded.studentID }, { include: { all: true } })
              .then(returnReport => { 
                returnReport
                  .reload()
                  .then(returnReport => {
                    const { id, userStudentID, user, ...rest} = returnReport.get({ plain: true })
                    res.json({ ...user, ...rest }) // merge two object
                  })
              })
              .catch(() => { res.sendStatus(400) })
          }
        })
    }
  })
})

module.exports = router
