/**
 * @openapi
 * /return-report/upload:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve form data from the db
 *     description: |
 *       Retrieve the user data for return report based on the studentID encoded in the Bearer header..
 *     tags:
 *       - applications
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string 
 *                 format: binary
 *                 description: |
 *                   PDF Blob/File to be uploaded
 *             required:
 *               - file
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Not enrolled in the exchange program
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */

const express = require('express')
const multer  = require('multer')
const jwt = require('jsonwebtoken')
const verifyToken = require('../verify-token')
const syno = require('../syno')
const router = express.Router()

const upload = multer()

router.post('/', verifyToken, upload.single('file'), (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, _) => {
    if (err) {
      res.sendStatus(401)
    } else {
      syno.fs.getInfo((error, data) => {
        if (error) {
          console.log(error)
          res.sendStatus(400)
        } else {
          console.log(req.file)
          res.json(data)
        }
      })
    }
  })
})

module.exports = router
