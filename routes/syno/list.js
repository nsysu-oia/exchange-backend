/**
 * @openapi
 * /syno/list:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Enumerate files in a given folder.
 *     description: |
 *       Enumerate files in a given folder.
 *     tags:
 *       - syno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               folder_path:
 *                 type: string
 *                 example: /web
 *             required:
 *               - folder_path
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
      const session = Date.now()
      synoLogin(session)
        .then(({ data }) => {
          axios
            .get('https://studyabroad.nsysu.edu.tw:5001/webapi/entry.cgi', {
              params: {
                _sid: data.data.sid,
                api: 'SYNO.FileStation.List',
                version: '2',
                method: 'list',
                folder_path: req.body.folder_path
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
