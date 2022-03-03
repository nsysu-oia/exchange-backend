const sequelize = require('./connect')
const User = require('./user')
const ReturnReport = require('./return-report')
const ProofOfExchange = require('./proof-of-exchange')

User.hasOne(ReturnReport)
User.hasOne(ProofOfExchange)

ReturnReport.belongsTo(User)
ProofOfExchange.belongsTo(User)

// User.sync({ alter: true })
// ReturnReport.sync({ alter: true })
// ProofOfExchange.sync({ alter: true })
sequelize.sync()

module.exports = {
  User: User,
  ReturnReport: ReturnReport,
  ProofOfExchange: ProofOfExchange
}
