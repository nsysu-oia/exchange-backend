/**
 * @openapi
 * /sid-auth:
 *   post:
 *     summary: Examine StudentID
 *     description: |
 *       This examine if the student ID is presented
 *       in the database, i.e., enrolled in the exchange
 *       program. Noted that a tester ID can be set via
 *       `.env` file and access it by `process.env.TESTER_ID`.
 *     tags:
 *       - authentications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentID:
 *                 type: string
 *                 description: |
 *                   The student ID of the student enrolled in
 *                   the exchange program *(case-insensitive)*.
 *                 example: yourStudentIDHere
 *             required:
 *               - studentID
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Not enrolled in the exchange program
 *
 */

const express = require('express')
const { User } = require('../../models/index')
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
        // if not found, user is null
        if (user) {
          res.sendStatus(200)
        } else {
          // the student is not registered in the exchange program
          res.sendStatus(400)
        }
      })
  }
})

module.exports = router
