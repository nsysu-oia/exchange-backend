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
 *                 userInfo:
 *                   type: object
 *                   properties:
 *                     studentID:
 *                       type: string
 *                     name:
 *                       type: string
 *                     degree:
 *                       type: string
 *                     college:
 *                       type: string
 *                     department:
 *                       type: string
 *                     nationalID:
 *                       type: string
 *                     status:
 *                       type: string
 *                     grade:
 *                       type: string
 *                     phones:
 *                       type: array
 *                       items:
 *                         type: string
 *                     zipResidential:
 *                       type: string
 *                     cityResidential:
 *                       type: string
 *                     addressResidential:
 *                       type: string
 *                     zipCorrespondence:
 *                       type: string
 *                     cityCorrespondence:
 *                       type: string
 *                     addressCorrespondence:
 *                       type: string
 *                     email:
 *                       type: string
 *                     birthYear:
 *                       type: string
 *                     birthMonth:
 *                       type: string
 *                     birthDay:
 *                       type: string
 *       400:
 *         description: Incorrect credential pair
 *
 */

const express = require('express')
const router = express.Router()
const axios = require('axios')
const jwt = require('jsonwebtoken')
const attrs = [
  'studentID',
  'name',
  'degree',
  'college',
  'department',
  'nationalID',
  'status',
  'grade',
  'phones',
  'zipResidential',
  'cityResidential',
  'addressResidential',
  'zipCorrespondence',
  'cityCorrespondence',
  'addressCorrespondence',
  'email',
  'birthYear',
  'birthMonth',
  'birthDay'
]
const degreeMap = {
  B: '學士班',
  M: '碩士班',
  D: '博士班'
}
const collegeMap = {
  1: '文學院',
  2: '理學院',
  3: '工學院',
  4: '管理學院',
  5: '海洋科學院',
  6: '社會科學院',
  7: '西灣學院'
}
const statusMap = {
  1: '在校',
  2: '復學',
  3: '休學',
  4: '退學',
  5: '畢業'
}

router.post('/', function (req, res) {
  if (req.body) {
    if (req.body.studentID === process.env.TESTER_ID && req.body.password === process.env.TESTER_PW) {
      const userInfo = { studentID: req.body.studentID }
      const token = jwt.sign({ userInfo }, process.env.JWT_KEY)
      res.json({ token, userInfo })
    } else {
      axios
        .post('https://studyabroad.nsysu.edu.tw/sso.php', req.body)
        .then(({ data }) => {
          if (data) {
            // data preprocessing
            const userInfo = Object.fromEntries(attrs.map((_, i) => [attrs[i], data[i]]))
            userInfo.degree = degreeMap[userInfo.degree]
            userInfo.college = collegeMap[userInfo.college[1]]
            userInfo.status = statusMap[userInfo.status]
            userInfo.phones = userInfo.phones.split(',')

            // generate jwt token
            const credentials = req.body
            const token = jwt.sign({ credentials }, process.env.JWT_KEY)

            res.json({ token, userInfo })
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
