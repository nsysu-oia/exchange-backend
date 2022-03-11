/**
 * @openapi
 * /syno/download:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Return the URL toward the specified file
 *     description: |
 *       Return the URL toward the specified file. The URL is not garanteed to be reachable.
 *     tags:
 *       - syno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               path:
 *                 type: string
 *                 example: /web/index.html
 *             required:
 *               - path
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
          res.set('Content-Type', 'text/plain')
          res.send(
            'https://studyabroad.nsysu.edu.tw:5001/webapi/entry.cgi?' +
            new URLSearchParams({
              _sid: data.data.sid,
              api: 'SYNO.FileStation.Download',
              version: '2',
              method: 'download',
              path: req.body.path
            }).toString()
          )
          synoLogout(session)
        })
    }
  })
})

module.exports = router
