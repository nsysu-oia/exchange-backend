const { DataTypes } = require('sequelize')
const sequelize = require('./connect')

const ReturnReport = sequelize.define('returnReport', {
  /* studentID: {
    type: DataTypes.STRING(15),
    primaryKey: true
  } */
}, {
  timestamps: false
})

module.exports = ReturnReport
