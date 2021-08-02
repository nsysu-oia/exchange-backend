/**
 * @openapi
 * /content:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve Web Contents
 *     description: |
 *       You can retrieve the contents you need for the website via this. List of available contents:
 *       * `stages`: various stages in the exchange program
 *     tags:
 *       - contents
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: |
 *                   The content you'd like to retrieve. See the description above.
 *                 example: stages
 *             required:
 *               - content
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Content not found
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *
 */

const express = require('express')
const jwt = require('jsonwebtoken')
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const verifyToken = require('../verifyToken')
const router = express.Router()

router.post('/', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, err => {
    if (err) {
      res.sendStatus(401)
    } else {
      if (!!req.body.content) {
        try {
          const content = yaml.load(fs.readFileSync(
            path.resolve(__dirname, './' + req.body.content + '.yaml'),
            'utf8'
          ))
          res.json(content)
        } catch (e) {
          console.log('Load content', e)
          res.sendStatus(400)
        }
      } else {
        res.sendStatus(400)
      }
    }
  })
})

module.exports = router
