const { DataTypes } = require('sequelize')
const sequelize = require('./connect')

const ProofOfScholarship = sequelize.define('proofOfScholarship', {
  fillDate: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  nameEng: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  degreeDuringExchange: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  exchangeStartDate: {
    type: DataTypes.DATEONLY
  },
  exchangeEndDate: {
    type: DataTypes.DATEONLY
  }
}, {
  timestamps: false
})

module.exports = ProofOfScholarship
