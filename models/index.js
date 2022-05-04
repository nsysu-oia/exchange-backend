const sequelize = require('./connect')
const User = require('./user')
const ReturnReport = require('./return-report')
const ProofOfExchange = require('./proof-of-exchange')
const ProofOfScholarship = require('./proof-of-scholarship')
const DownloadLink = require('./download-link')

User.hasOne(ReturnReport)
User.hasOne(ProofOfExchange)
User.hasOne(ProofOfScholarship)

ReturnReport.belongsTo(User)
ProofOfExchange.belongsTo(User)
ProofOfScholarship.belongsTo(User)

// User.sync({ alter: true })
// ReturnReport.sync({ alter: true })
// ProofOfExchange.sync({ alter: true })
// ProofOfExchange.sync({ alter: true })
// DownloadLink.sync({ alter: true })
sequelize.sync()

module.exports = {
  User: User,
  ReturnReport: ReturnReport,
  ProofOfExchange: ProofOfExchange,
  ProofOfScholarship: ProofOfScholarship,
  DownloadLink: DownloadLink
}
