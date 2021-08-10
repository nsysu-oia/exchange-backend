const { DataTypes } = require('sequelize')
const sequelize = require('./connect')

const ReturnReport = sequelize.define('returnReport', {
  fillDate: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  costVisa: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costTicket: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costInsurance: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costHousing: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costLiving: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costCommuting: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costTravel: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costTextbook: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costLanguageSchool: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costOther: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  costTotal: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  householdIncome: {
    type: DataTypes.STRING(30),
    defaultValue: ''
  },
  SES: {
    type: DataTypes.STRING(30),
    defaultValue: ''
  },
  housing: {
    type: DataTypes.STRING(50),
    defaultValue: ''
  },
  housingDistance: {
    type: DataTypes.STRING(50),
    defaultValue: ''
  },
  satisfactionHousing: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionHousingDetail: {
    type: DataTypes.TEXT
  },
  motivations: {
    type: DataTypes.STRING(300),
    defaultValue: '[]',
    get() {
      return JSON.parse(this.getDataValue('motivations'))
    },
    set(arr) {
      return this.setDataValue('motivations', JSON.stringify(arr))
    }
  },
  motivationPrimary: {
    type: DataTypes.STRING(50),
    defaultValue: ''
  },
  gains: {
    type: DataTypes.STRING(500),
    defaultValue: '[]',
    get() {
      return JSON.parse(this.getDataValue('gains'))
    },
    set(arr) {
      return this.setDataValue('gains', JSON.stringify(arr))
    }
  },
  gainPrimary: {
    type: DataTypes.STRING(80),
    defaultValue: ''
  },
  satisfactionComprehension: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionCourse: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionPerformance: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  problemCourse: {
    type: DataTypes.TEXT
  },
  problemCourseSolution: {
    type: DataTypes.TEXT
  },
  satisfactionStudyAbroad: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionRecommendation: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionRecommendationDetail: {
    type: DataTypes.TEXT
  },
  laboratory: {
    type: DataTypes.STRING(10),
    defaultValue: ''
  },
  experiment: {
    type: DataTypes.STRING(10),
    defaultValue: ''
  },
  paper: {
    type: DataTypes.STRING(10),
    defaultValue: ''
  },
  satisfactionCourseEnrollment: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionCourseSchedule: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionBuddyProgram: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionEvent: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionUniversity: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  satisfactionUniversityDetail: {
    type: DataTypes.TEXT
  },
  dissatisfactionUniversityDetail: {
    type: DataTypes.TEXT
  },
  studentClub: {
    type: DataTypes.STRING(10),
    defaultValue: ''
  },
  studentClubName: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  studentClubRecommendation: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  studentClubReview: {
    type: DataTypes.TEXT
  },
  contact: {
    type: DataTypes.STRING(10),
    defaultValue: ''
  },
  contactDetail: {
    type: DataTypes.TEXT
  },
  reportIntroduction: {
    type: DataTypes.TEXT
  },
  reportCurriculum: {
    type: DataTypes.TEXT
  },
  reportExtraCurriculum: {
    type: DataTypes.TEXT
  },
  reportBenefit: {
    type: DataTypes.TEXT
  },
  reportDifficulty: {
    type: DataTypes.TEXT
  },
  reportCultralDifference: {
    type: DataTypes.TEXT
  },
  reportGrow: {
    type: DataTypes.TEXT
  },
  reportScholarship: {
    type: DataTypes.TEXT
  },
  reportTestimonial: {
    type: DataTypes.TEXT
  },
  reportEnglish: {
    type: DataTypes.TEXT('medium')
  }
}, {
  timestamps: false
})

module.exports = ReturnReport
