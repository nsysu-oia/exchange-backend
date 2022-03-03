/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       beaerFormat: JWT
 *   responses:
 *     UnauthorizedError:
 *       description: Access token is missing or invalid
 *
 */

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()

const indexRouter = require('./routes/index')
const sidAuthRouter = require('./routes/authentications/sid-auth')
const ssoAuthRouter = require('./routes/authentications/sso-auth')
const returnReportRouter = require('./routes/applications/return-report')
const proofOfExchangeRouter = require('./routes/applications/proof-of-exchange')
const synoUploadRouter = require('./routes/syno/upload')
const synoGetinfoRouter = require('./routes/syno/getinfo')
const fontRouter = require('./routes/fonts/font')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/', indexRouter)
app.use('/sid-auth', sidAuthRouter)
app.use('/sso-auth', ssoAuthRouter)
app.use('/return-report', returnReportRouter)
app.use('/proof-of-exchange', proofOfExchangeRouter)
app.use('/syno/upload', synoUploadRouter)
app.use('/syno/getinfo', synoGetinfoRouter)
app.use('/font', fontRouter)

// openapi
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Exchange Platform Back-end API',
      contact: {
        name: 'Ernie Chu',
        email: 'b073040018@nsysu.edu.tw'
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
      },
      version: '0.0.1'
    }
  },
  apis: [
    './app.js',
    './routes/*.js',
    './routes/*/*.js'
  ]
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options), {
  swaggerOptions: {
    requestInterceptor: req => {
      // dummy token generated by https://jwt.io using process.env.JWT_KEY
      req.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SUQiOiJkb2MiLCJpYXQiOjE2MjkzOTM2MjF9.z5Oz0PZQzT6VYtx5ZcNMyNRPqz2lwdcv6fK-fuBwSa8'
      return req
    }
  }
}))

module.exports = app
