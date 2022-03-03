/**
 * @openapi
 * /proof-of-exchange:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve form data from the db
 *     description: |
 *       Retrieve the user data for return report based on the studentID encoded in the Bearer header..
 *     tags:
 *       - applications
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Not enrolled in the exchange program
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Update individual question response to db
 *     description: |
 *       TBD
 *     tags:
 *       - applications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               values:
 *                 type: object 
 *                 description: |
 *                   The argument would be directly passed into [sequelize update()](https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-update).
 *                 example:
 *                   studentClubName: Power Dance Club
 *                   fillDate: 2021-08-11
 *             required:
 *               - values
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Not enrolled in the exchange program or have never performed `GET /proof-of-exchange`
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *
 */

const express = require('express')
const jwt = require('jsonwebtoken')
const { ProofOfExchange } = require('../../models/index')
const verifyToken = require('../verify-token')
const router = express.Router()

router.get('/', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.sendStatus(401)
    } else {
      ProofOfExchange
        .findOne({
          where: { userStudentID: decoded.studentID },
          include: { all: true }
        })
        .then(proofOfExchange => {
          // if not found, user is null
          if (proofOfExchange) {
            const { id, userStudentID, user, ...rest } = proofOfExchange.get({ plain: true })
            res.json({ ...user, ...rest }) // merge two object
          } else {
            ProofOfExchange
              .create({ userStudentID: decoded.studentID }, { include: { all: true } })
              .then(proofOfExchange => { 
                proofOfExchange
                  .reload()
                  .then(proofOfExchange => {
                    const { id, userStudentID, user, ...rest } = proofOfExchange.get({ plain: true })
                    res.json({ ...user, ...rest }) // merge two object
                  })
              })
              .catch(() => { res.sendStatus(400) })
          }
        })
    }
  })
})

router.post('/', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.sendStatus(401)
    } else {
      ProofOfExchange
        .findOne({
          where: { userStudentID: decoded.studentID }
        })
        .then(proofOfExchange => {
          if (proofOfExchange) {
            // not check the validity of the identifier due to performance concern
            res.sendStatus(200)

            proofOfExchange
              .update(req.body.values)
              .catch(err => { console.log(err) })
          } else {
            res.sendStatus(400)
          }
        })
    }
  })
})

module.exports = router
