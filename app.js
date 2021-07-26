const express       = require('express')
const path          = require('path')
const cookieParser  = require('cookie-parser')
const logger        = require('morgan')
const cors          = require('cors')
const swaggerJsdoc  = require('swagger-jsdoc')
const swaggerUi     = require('swagger-ui-express')
require('dotenv').config()

const indexRouter = require('./routes/index')
const sidAuthRouter = require('./routes/login/sid-auth')
const ssoAuthRouter = require('./routes/login/sso-auth')

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
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
      },
      version: '0.0.1'
    }
  },
  apis: [
    './routes/*.js',
    './routes/*/*.js'
  ]
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)))

module.exports = app
