const { DataTypes } = require('sequelize')
const sequelize = require('./connect')

const User = sequelize.define('user', {
  studentID: {
    type: DataTypes.STRING(15),
    primaryKey: true
  },
  nameChi: {
    type: DataTypes.STRING(15),
    defaultValue: ''
  },
  degree: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  collegeChi: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  collegeEng: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  departmentChi: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  departmentEng: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  nationalID: {
    type: DataTypes.STRING(15),
    defaultValue: ''
  },
  status: {
    type: DataTypes.STRING(15),
    defaultValue: ''
  },
  grade: {
    type: DataTypes.STRING(15),
    defaultValue: ''
  },
  phones: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  zipResidential: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  cityResidential: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  addressResidential: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  zipCorrespondence: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  cityCorrespondence: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  addressCorrespondence: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  birthYear: {
    type: DataTypes.STRING(10),
    defaultValue: ''
  },
  birthMonth: {
    type: DataTypes.STRING(10),
    defaultValue: ''
  },
  birthDay: {
    type: DataTypes.STRING(10),
    defaultValue: ''
  },
  yearApply: {
    type: DataTypes.STRING(15),
    defaultValue: ''
  },
  semester: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  program: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  continentChi: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  continentEng: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  countryChi: {
    type: DataTypes.STRING(50),
    defaultValue: ''
  },
  countryEng: {
    type: DataTypes.STRING(50),
    defaultValue: ''
  },
  universityChi: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  universityEng: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  exchangeDepartmentChi: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  exchangeDepartmentEng: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  duration: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  scholarship: {
    type: DataTypes.STRING(50),
    defaultValue: ''
  }
}, {
  timestamps: false
})

module.exports = User
