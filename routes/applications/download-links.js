/**
 * @openapi
 * /download-links:
 *   get:
 *     summary: get download links
 *     description: return a object containing download items' titles and links.
 *     tags:
 *       - applications
 *     responses:
 *       200:
 *         description: OK
 */

const express = require('express')
const router = express.Router()
const { DownloadLink } = require('../../models/index')

/* GET */
router.get('/', function (_, res) {
  DownloadLink.findAll({
    raw : true ,
    nest : true
  }).then(downloadLinks => {
    const linkMap = {}
    downloadLinks.forEach(d => {
      linkMap[d.title] = d.link
    })
    res.json(linkMap)
  })
})

module.exports = router
