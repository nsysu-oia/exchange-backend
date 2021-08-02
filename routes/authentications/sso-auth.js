/**
 * @openapi
 * /sso-auth:
 *   post:
 *     summary: Examine StudentID and Password
 *     description: |
 *       This examine a pair of a studentID and a password via
 *       an NSYSU SSO authentication proxy, `studyabroad.nsysu.edu.tw/sso.php`,.
 *       Noted that a tester credential pair can be set via
 *       `.env` file and access it by `process.env.TESTER_ID`
 *       and `process.env.TESTER_PW`.
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
 *               password:
 *                 type: string
 *                 description: |
 *                   The NSYSU SSO password.
 *                 example: yourPasswordHere
 *             required:
 *               - studentID
 *               - password
 *     responses:
 *       200:
 *         description: JWT token and user info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT generated from the credentials and a secret key.
 *       400:
 *         description: Incorrect credential pair
 *
 */

const express = require('express')
const router = express.Router()
const axios = require('axios')
const jwt = require('jsonwebtoken')
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const User = require('../../models/user')


const data = yaml.load(fs.readFileSync(
  path.resolve(__dirname, './data.yaml'),
  'utf8'
))
const attrs             = data.attrs
const degreeMap         = data.degreeMap
const collegeMap        = data.collegeMap
const statusMap         = data.statusMap
const collegeEngMap     = data.collegeEngMap
const departmentEngMap  = data.departmentEngMap

router.post('/', function (req, res) {
  if (req.body) {
    if (req.body.studentID === process.env.TESTER_ID && req.body.password === process.env.TESTER_PW) {
      // generate jwt token for tester
      const token = jwt.sign({
        studentID: req.body.studentID
      }, process.env.JWT_KEY, { expiresIn: '7d' })
      res.json({ token })
    } else {
      axios
        .post('https://studyabroad.nsysu.edu.tw/sso.php', req.body)
        .then(({ data }) => {
          if (data) {
            // generate jwt token
            const token = jwt.sign({
              studentID: req.body.studentID
            }, process.env.JWT_KEY, { expiresIn: '7d' })
            res.json({ token })

            // data preprocessing
            const user = Object.fromEntries(attrs.map((_, i) => [attrs[i], data[i]]))
            user.degreeChi = degreeMap[user.degreeChi]
            user.collegeChi = collegeMap[user.collegeChi[1]]
            user.collegeEng = collegeEngMap[user.collegeChi]
            user.departmentEng = departmentEngMap[user.departmentChi]
            user.status = statusMap[user.status]

            // update the user info to db
            User
              .findOne({
                where: { studentID: user.studentID }
              })
              .then(row => {
                row.update(user)
              })
          } else {
            // incorrect student ID or password
            res.sendStatus(400)
          }
        })
    }
  } else {
    // request with no payload
    res.sendStatus(400)
  }
})

module.exports = router
