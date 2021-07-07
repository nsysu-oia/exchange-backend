const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('oia_exchange_platform', 'root', process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Asia/Taipei'
  }
})

module.exports = sequelize
