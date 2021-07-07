const { DataTypes } = require('sequelize')
const sequelize = require('./index.js')

const User = sequelize.define('User', {
  studentID: {
    type: DataTypes.STRING(15),
    primaryKey: true
  }
}, {
  timestamps: false
})

sequelize.sync()

module.exports = User
