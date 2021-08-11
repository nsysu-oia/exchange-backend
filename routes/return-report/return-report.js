/**
 * @openapi
 * /return-report:
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
 *               identifier:
 *                 type: string
 *                 description: |
 *                   The identifier for the question to be updated.
 *                 example: studentClubName
 *               value:
 *                 type: string
 *                 description: |
 *                   The associated value.
 *                 example: Power Dance Club
 *               fillDate:
 *                 type: string
 *                 description: |
 *                   The date on which the data is updated
 *                 example: 2021-08-11
 *             required:
 *               - identifier
 *               - value
 *               - fillDate
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Not enrolled in the exchange program or have never performed `GET /return-report`
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
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
            const { id, userStudentID, user, ...rest } = returnReport.get({ plain: true })
            res.json({ ...user, ...rest }) // merge two object
          } else {
            ReturnReport
              .create({ userStudentID: decoded.studentID }, { include: { all: true } })
              .then(returnReport => { 
                returnReport
                  .reload()
                  .then(returnReport => {
                    const { id, userStudentID, user, ...rest } = returnReport.get({ plain: true })
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
      ReturnReport
        .findOne({
          where: { userStudentID: decoded.studentID }
        })
        .then(returnReport => {
          if (returnReport) {
            // not check the validity of the identifier due to performance concern
            res.sendStatus(200)

            const data = {}
            data[req.body.identifier] = req.body.value
            data.fillDate = req.body.fillDate

            returnReport
              .update(data)
              .catch(err => { console.log(err) })
          } else {
            res.sendStatus(400)
          }
        })
    }
  })
})

module.exports = router
