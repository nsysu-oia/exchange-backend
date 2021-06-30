const express = require('express')
const router = express.Router()
const axios = require('axios')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
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

router.use(cors())
router.use(bodyParser.json())

router.post('/', function (req, res) {
  if (req.body) {
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
          const token = jwt.sign({ userInfo }, process.env.JWT_KEY)

          res.json({ token, userInfo })
        } else {
          // incorrect student ID or password
          res.sendStatus(400)
        }
      })
  } else {
    // request with no payload
    res.sendStatus(400)
  }
})

module.exports = router
