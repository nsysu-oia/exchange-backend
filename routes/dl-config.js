/**
 * @openapi
 * /dl-config:
 *   get:
 *     summary: downlaod config page
 *     description: This page is provided to the OIA staff in ordre to let them update the download link by themselves.
 *     responses:
 *       200:
 *         description: OK
 *   post:
 *     summary: update the link
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: the download item id
 *                 example: 1
 *               newLink:
 *                 type: string
 *                 description: the udpated link
 *                 example: https://studyabroad.nsysu.edu.tw
 *             required:
 *               - id
 *               - newLink
 *     responses:
 *       200:
 *         description: OK
 */

const express = require('express')
const router = express.Router()
const { DownloadLink } = require('../models/index')

/* GET */
router.get('/', function (_, res) {
  DownloadLink.findAll({
    raw : true ,
    nest : true
  }).then(downloadLinks => {
    res.render('dl-config', {
      items: downloadLinks
    })
  })
})

/* POST */
router.post('/', function (req, res) {
  DownloadLink.findOne({
    where: { id: req.body.id }
  }).then(downloadLink => {
    downloadLink.link = req.body.newLink
    downloadLink.save()
    res.sendStatus(200)
  })
})

module.exports = router
