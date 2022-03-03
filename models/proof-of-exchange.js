const { DataTypes } = require('sequelize')
const sequelize = require('./connect')

const ProofOfExchange = sequelize.define('proofOfExchange', {
  fillDate: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
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

module.exports = ProofOfExchange
