/**
 * @openapi
 * /proof-of-scholarship:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve form data from the db
 *     description: |
 *       Retrieve the user data for the proof of scholarship based on the studentID encoded in the Bearer header..
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
 *       Update individual question response to proof of scholarship table
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
 *                   degreeDuringExchange: 學士班
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
const { ProofOfScholarship } = require('../../models/index')
const verifyToken = require('../verify-token')
const router = express.Router()

router.get('/', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.sendStatus(401)
    } else {
      ProofOfScholarship
        .findOne({
          where: { userStudentID: decoded.studentID },
          include: { all: true }
        })
        .then(proofOfScholarship => {
          // if not found, user is null
          if (proofOfScholarship) {
            const { id, userStudentID, user, ...rest } = proofOfScholarship.get({ plain: true })
            res.json({ ...user, ...rest }) // merge two object
          } else {
            ProofOfScholarship
              .create({ userStudentID: decoded.studentID }, { include: { all: true } })
              .then(proofOfScholarship => { 
                proofOfScholarship
                  .reload()
                  .then(proofOfScholarship => {
                    const { id, userStudentID, user, ...rest } = proofOfScholarship.get({ plain: true })
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
      ProofOfScholarship
        .findOne({
          where: { userStudentID: decoded.studentID }
        })
        .then(proofOfScholarship => {
          if (proofOfScholarship) {
            // not check the validity of the identifier due to performance concern
            res.sendStatus(200)

            proofOfScholarship
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
