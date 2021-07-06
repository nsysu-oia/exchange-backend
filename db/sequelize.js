const { Sequelize } = require('sequelize')
sequelize = new Sequelize('oia_exchange_platform', 'root', '@Eji6ru4tj4', {
  host: 'studyabroad.nsysu.edu.tw',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Asia/Taipei'
  }
})

module.exports = sequelize
