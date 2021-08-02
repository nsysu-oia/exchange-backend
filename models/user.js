const { DataTypes } = require('sequelize')
const sequelize = require('./index.js')

const User = sequelize.define('User', {
  studentID: {
    type: DataTypes.STRING(15),
    primaryKey: true
  },
  nameChi: {
    type: DataTypes.STRING(15)
  },
  yearApply: {
    type: DataTypes.STRING(15)
  },
  semester: {
    type: DataTypes.STRING(20)
  },
  program: {
    type: DataTypes.STRING(20)
  },
  collegeChi: {
    type: DataTypes.STRING(100)
  },
  collegeEng: {
    type: DataTypes.STRING(100)
  },
  departmentChi: {
    type: DataTypes.STRING(100)
  },
  departmentEng: {
    type: DataTypes.STRING(100)
  },
  continentChi: {
    type: DataTypes.STRING(20)
  },
  continentEng: {
    type: DataTypes.STRING(20)
  },
  countryChi: {
    type: DataTypes.STRING(50)
  },
  countryEng: {
    type: DataTypes.STRING(50)
  },
  universityChi: {
    type: DataTypes.STRING(100)
  },
  universityEng: {
    type: DataTypes.STRING(100)
  },
  exchangeDepartmentChi: {
    type: DataTypes.STRING(100)
  },
  exchangeDepartmentEng: {
    type: DataTypes.STRING(100)
  },
  duration: {
    type: DataTypes.STRING(20)
  },
  scholarship: {
    type: DataTypes.STRING(50)
  }
}, {
  timestamps: false
})

// sequelize.sync({ alter: true })
sequelize.sync()

module.exports = User
