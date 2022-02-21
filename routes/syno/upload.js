/**
 * @openapi
 * /syno/upload:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Upload file to syno NAS
 *     description: |
 *      Upload a file to the synology NAS using multipart/form-data.
 *     tags:
 *       - syno
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
 *                   Blob/File to be uploaded
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
const FormData = require('form-data')
const axios = require('axios')
const verifyToken = require('../verify-token')
const { synoLogin, synoLogout } = require('./syno')
const router = express.Router()

const upload = multer()

router.post('/', verifyToken, upload.single('file'), (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, _) => {
    if (err) {
      res.sendStatus(401)
    } else {
      const session = Date.now()
      synoLogin(session)
        .then(({ data }) => {
          const formData = new FormData()
          formData.append('api', 'SYNO.FileStation.Upload')
          formData.append('version', '3')
          formData.append('method', 'upload')
          formData.append('path', req.body.path)
          formData.append('create_parents', 'true')
          formData.append('overwrite', 'overwrite')
          formData.append('file', req.file.buffer, req.body.filename)

          axios
            .post('https://studyabroad.nsysu.edu.tw:5001/webapi/entry.cgi?_sid=' + data.data.sid, formData, {
              headers: formData.getHeaders(),
              maxBodyLength: 100000000
            })
            .then(({ data }) => {
              if (data.success) {
                res.sendStatus(200)
              } else {
                res.sendStatus(400)
              }
              console.log(data)
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
