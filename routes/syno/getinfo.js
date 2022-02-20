/**
 * @openapi
 * /syno/getinfo:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Get files info
 *     description: |
 *       A file list is given as an array in the request body. The response is also an array. If a file do not exist, the corresponding element would have an error code of 408.
 *     tags:
 *       - syno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paths:
 *                 type: array
 *                 example:
 *                   - /share
 *                   - /sharee
 *             required:
 *               - paths
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Not enrolled in the exchange program
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */

const express = require('express')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const verifyToken = require('../verify-token')
const { synoLogin, synoLogout } = require('./syno')
const router = express.Router()

router.post('/', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, _) => {
    if (err) {
      res.sendStatus(401)
    } else {
      // preprocess the paths
      const paths = req.body.paths
      for (let i = 0; i < paths.length; i++) {
        paths[i] = '"' + paths[i] + '"'
      }

      const session = Date.now()
      synoLogin(session)
        .then(({ data }) => {
          axios
            .get('https://studyabroad.nsysu.edu.tw:5001/webapi/entry.cgi', {
              params: {
                _sid: data.data.sid,
                api: 'SYNO.FileStation.List',
                version: '2',
                method: 'getinfo',
                path: '[' + paths.join(',') + ']'
              }
            })
            .then(({ data }) => {
              if (data.success) {
                res.json(data.data.files)
              } else {
                res.sendStatus(400)
              }
            })
            .catch(e => {
              res.sendStatus(400)
              console.log(e)
            })
            .finally(() => {
              synoLogout(session)
            })
        })
    }
  })
})

module.exports = router
