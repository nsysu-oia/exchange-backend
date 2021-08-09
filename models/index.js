const sequelize = require('./connect')
const User = require('./user')
const ReturnReport = require('./return-report')

User.hasOne(ReturnReport)
ReturnReport.belongsTo(User)

sequelize.sync()

module.exports = {
  User: User,
  ReturnReport: ReturnReport
}
