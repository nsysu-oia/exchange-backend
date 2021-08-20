/**
 * @openapi
 * /font:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Get the font file in base64
 *     description: |
 *       TBD
 *     tags:
 *       - assets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               font:
 *                 type: string 
 *                 description: |
 *                   The font name. Currently available:
 *                   - edukai-4.0
 *                 example:
 *                   edukai-4.0
 *             required:
 *               - font
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Font not found
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *
 */

const express = require('express')
const jwt = require('jsonwebtoken')
const verifyToken = require('../verify-token')
const router = express.Router()
const fs = require('fs')
const path = require('path')

router.post('/', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, err => {
    if (err) {
      res.sendStatus(401)
    } else {
      try {
        const font = fs.readFileSync(
          path.join(__dirname, './' + req.body.font + '.ttf'),
          { encoding: 'base64' }
        )
        res.send(font)
      } catch (err) {
        console.log(err)
        res.sendStatus(400)
      }
    }
  })
})

module.exports = router
