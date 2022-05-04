const { DataTypes } = require('sequelize')
const sequelize = require('./connect')

const DownloadLink = sequelize.define('downloadLink', {
  title: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  link: {
    type: DataTypes.STRING,
    defaultValue: ''
  }
}, {
  timestamps: false
})

module.exports = DownloadLink
