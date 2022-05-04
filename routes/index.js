/**
 * @openapi
 * /:
 *   get:
 *     summary: Express Index Page
 *     description: You can use this to examine if the server is running healthily.
 *     responses:
 *       200:
 *         description: OK
 */

const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (_, res) {
  res.render('index', {
    title: 'Express',
    content: 'Welcome to Express, served by Office of International Affairs, NSYSU'
  })
})

module.exports = router
