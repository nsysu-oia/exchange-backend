const { DataTypes } = require('sequelize')
const sequelize = require('./connect')

const User = sequelize.define('user', {
  studentID: {
    type: DataTypes.STRING(15),
    primaryKey: true
  },
  nameChi: {
    type: DataTypes.STRING(15)
  },
  degree: {
    type: DataTypes.STRING
  },
  collegeChi: {
    type: DataTypes.STRING
  },
  collegeEng: {
    type: DataTypes.STRING
  },
  departmentChi: {
    type: DataTypes.STRING
  },
  departmentEng: {
    type: DataTypes.STRING
  },
  nationalID: {
    type: DataTypes.STRING(15)
  },
  status: {
    type: DataTypes.STRING(15)
  },
  grade: {
    type: DataTypes.STRING(15)
  },
  phones: {
    type: DataTypes.STRING
  },
  zipResidential: {
    type: DataTypes.STRING
  },
  cityResidential: {
    type: DataTypes.STRING
  },
  addressResidential: {
    type: DataTypes.STRING
  },
  zipCorrespondence: {
    type: DataTypes.STRING
  },
  cityCorrespondence: {
    type: DataTypes.STRING
  },
  addressCorrespondence: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  birthYear: {
    type: DataTypes.STRING(10)
  },
  birthMonth: {
    type: DataTypes.STRING(10)
  },
  birthDay: {
    type: DataTypes.STRING(10)
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
    type: DataTypes.STRING
  },
  universityEng: {
    type: DataTypes.STRING
  },
  exchangeDepartmentChi: {
    type: DataTypes.STRING
  },
  exchangeDepartmentEng: {
    type: DataTypes.STRING
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

module.exports = User
