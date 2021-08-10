/*
 * ---
基本資料:
  nameChi:
    label: 姓名
    value: 
    type: text
    readonly: true
  fillDate:
    label: 撰寫日期
    value: 
    type: date
    readonly: true
  studentID: 
    label: 學號
    value: 
    type: text
    readonly: true
  yearApply: 
    label: 甄選年度/出境類別
    value: 
    type: text
    readonly: true
  program: 
    label: 地區
    value: 
    type: text
    readonly: true
  collegeChi: 
    label: 中文學院
    value: 
    type: text
    readonly: true
  departmentChi: 
    label: 中文系所
    value: 
    type: text
    readonly: true
  collegeEng: 
    label: 英文學院
    value: 
    type: text
    readonly: true
  departmentEng: 
    label: 英文系所
    value: 
    type: text
    readonly: true
  degree: 
    label: 學位
    value: 
    type: text
    readonly: true
  grade: 
    label: 年級
    value: 
    type: text
    readonly: true
  continentChi: 
    label: 中文州別
    value: 
    type: text
    readonly: true
  countryChi: 
    label: 中文國別
    value: 
    type: text
    readonly: true
  universityChi: 
    label: 中文交換/研修校名
    value: 
    type: text
    readonly: true
  continentEng: 
    label: 英文州別
    value: 
    type: text
    readonly: true
  countryEng: 
    label: 英文國別
    value: 
    type: text
    readonly: true
  universityEng: 
    label: 英文交換/研修校名
    value: 
    type: text
    readonly: true
  exchangeDepartmentChi: 
    label: 中文交換/研修系所
    value: 
    type: text
    readonly: true
  exchangeDepartmentEng: 
    label: 英文交換/研修系所
    value: 
    type: text
    readonly: true
  semester: 
    label: 交換/研修期間
    value: 
    type: text
    readonly: true
  duration: 
    label: 實際停留期間
    value:
    type: select
    options:
      - 1個月
      - 2個月
      - 3個月
      - 4個月
      - 5個月
      - 6個月
      - 7個月
      - 8個月
      - 9個月
      - 10個月
      - 11個月
      - 12個月
  scholarship: 
    label: 獎助來源
    value: 
    type: text
    readonly: true
交換/研修/寒暑期期間的花費:
  costVisa:
    label: 簽證費
    value: 
    type: number
  costTicket:
    label: 機票費
    value: 
    type: number
  costInsurance:
    label: 保險費
    value: 
    type: number
  costHousing:
    label: 住宿費
    value: 
    type: number
  costLiving:
    label: 生活費
    value: 
    type: number
  costCommuting:
    label: 交通費
    value: 
    type: number
  costTravel:
    label: 旅遊費
    value: 
    type: number
  costTextbook:
    label: 書籍費
    value: 
    type: number
  costLanguageSchool:
    label: 語言學校費用
    value: 
    type: number
  costOther:
    label: 其他費用
    value: 
    type: number
  costTotal:
    label: 總金額
    value: 
    type: number
    readonly: true
  householdIncome:
    label: 請問您的家庭年收入為？
    value: 
    type: select
    options:
      - 211萬以上
      - 181-210萬
      - 151-180萬
      - 121-150萬
      - 91-120萬
      - 61-90萬
      - 31-60萬
      - 30萬以下
      - 符合低收入戶
  SES:
    label: 請問您認為您家庭的社會經濟地位是屬於哪一階層？
    value: 
    type: select
    options:
      - 上層
      - 中上層
      - 中層
      - 中下層
      - 下層
住宿:
  housing:
    label: 至交換/研修/寒暑期學校就讀期間的住宿？
    value: 
    type: select
    options:
      - 學校宿舍（校內）
      - 學校宿舍（校外） 
      - 學校媒合/推薦的私人住宿機構 
      - 自己尋找的私人住宿
      - 自己尋找的住宿家庭
      - 住自己的親友家
      - 其他
  housingDistance:
    label: 離學校多遠？
    value: 
    type: select
    options:
      - 走路10分鐘內
      - 走路11～30分鐘內
      - 走路半小時～一小時
      - 搭車半小時內
      - 搭車半小時～一小時
      - 搭車一小時以上
  satisfactionHousing:
    label: 對於住宿的滿意度
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionHousingDetail:
    label: 滿意/不滿意的原因
    value: 
    type: textarea
動機與收穫:
  motivations:
    label: 最初選擇出國研修的動機 (複選)
    value: 
    type: checkbox
    options:
      - 想增進外語能力
      - 想增進國際視野
      - 為未來出國念學位作準備
      - 未來想在國外工作
      - 獎助學金支援
      - 畢業門檻
      - 其他
  motivationPrimary:
    label: 最主要的動機
    value: 
    type: select
    options:
      - 想增進外語能力
      - 想增進國際視野
      - 為未來出國念學位作準備
      - 未來想在國外工作
      - 獎助學金支援
      - 畢業門檻
      - 其他
  gains:
    label: 出國研修的收穫(複選)
    value: 
    type: checkbox
    options:
      - 想增進外語能力
      - 想增進國際視野
      - 體驗國外生活與風俗民情
      - 增進自我信心，學習獨立
      - 選修國外課程，嚐試不同上課方式
      - 與國外學生與學者交流，結交許多良師益友
      - 確立未來出國進修方向
      - 其他
  gainPrimary:
    label: 最大的收穫
    value: 
    type: select
    options:
      - 想增進外語能力
      - 想增進國際視野
      - 體驗國外生活與風俗民情
      - 增進自我信心，學習獨立
      - 選修國外課程，嚐試不同上課方式
      - 與國外學生與學者交流，結交許多良師益友
      - 確立未來出國進修方向
      - 其他
學業表現:
  satisfactionComprehension:
    label: 整體來說，我認為自己在課程內容之吸收瞭解程度為何？
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionCourse:
    label: 整體來說，我對自己在課程上表現之滿意程度 (包括上課互動、同學間的互動、考試成績等等)
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionPerformance:
    label: 整體而言，我對自己在研修學校的表現的滿意程度 (包括上課、學校內的活動等等)
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  problemCourse:
    label: 研修期間，遭遇的最大關於課程方面的問題？
    value: 
    type: textarea
  problemCourseSolution:
    label: (承上題)，你的解決方式是?
    value: 
    type: textarea
  satisfactionStudyAbroad:
    label: 此次研修體驗對我我畢業後繼續出國深造之意願。
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionRecommendation:
    label: 你向其他同學或學弟妹推薦此研修學校的之意願程度。
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionRecommendationDetail:
    label: (承上題)，推薦/不推薦的原因是?
    value: 
    type: textarea
課程、活動:
  laboratory:
    label: 此次是否有進交換/研修/寒暑期學校實驗室？
    value: 
    type: select
    options:
      - 有
      - 沒有
  experiment:
    label: 回國後是否繼續進行該項實驗？
    value: 
    type: select
    options:
      - 有
      - 沒有
  paper:
    label: 你是否有針對實驗成果發表論文？
    value: 
    type: select
    options:
      - 有
      - 沒有
  satisfactionCourseEnrollment:
    label: 你對於研修學校的選課安排(選課流程簡單、好選到自己想要的課等等) 的滿意程度
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionCourseSchedule:
    label: 你對於研修學校的課程安排(時間安排、課程內容、師資專業等等) 的滿意程度
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionBuddyProgram:
    label: 你對於研修學校BUDDY PROGRAM安排的滿意程度
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionEvent:
    label: 你對於研修學校的活動安排(聚會、PARTY、小旅遊等) 的滿意程度
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionUniversity:
    label: 整體而言，你對研修學校的滿意程度為何?
    value: 
    type: select
    options:
      - 非常滿意
      - 滿意
      - 普通
      - 不滿意
      - 非常不滿意
  satisfactionUniversityDetail:
    label: 整體而言，你最滿意研修學校的哪些地方?
    value: 
    type: text
  dissatisfactionUniversityDetail:
    label: 整體而言，你最不滿意研修學校的哪些地方?
    value: 
    type: text
社團、聯繫:
  studentClub:
    label: 你是否有參加社團
    value: 
    type: select
    options:
      - 有
      - 沒有
  studentClubName:
    label: 參加的社團名稱
    value: 
    type: text
  studentClubRecommendation:
    label: 推薦學弟妹加入社團的意願程度
    value: 
    type: select
    options:
      - 非常有意願
      - 有意願
      - 普通
      - 無意願
      - 完全無意願
  studentClubReview:
    label: 參加社團的感想
    value: 
    type: textarea
  contact:
    label: 是否願意留下聯絡資訊給有興趣的學弟妹
    value: 
    type: select
    options:
      - 願意
      - 不願意
  contactDetail:
    label: 聯絡資訊 (Email、手機、FB、Twitter、IG、Blog、YouTube等)
    value: 
    type: textarea
心得報告:
  reportIntroduction:
    label: 學校簡介
    value: 
    type: textarea
  reportCurriculum:
    label: 國外研修之課程學習（課內），另外推薦受益最多/最喜歡的課程
    value: 
    type: textarea
  reportExtraCurriculum:
    label: 國外研修之生活學習（課外）
    value: 
    type: textarea
  reportBenefit:
    label: 交換/研修之具體效益（請條列式列舉）
    value: 
    type: textarea
  reportDifficulty:
    label: 海外生活期間是否曾遭遇困境，及是否解決問題? 如是，請說明如何解決問題;如未解決，請說明事件最大的啟發及思考未來可以怎麼解決?
    value: 
    type: textarea
  reportCultralDifference:
    label: 海外生活期間是否曾遭遇文化衝擊，您如何去面對及適應?
    value: 
    type: textarea
  reportGrow:
    label: 海外生活歷練是否為您人生帶來不一樣的改變或者個人特質上的轉變，最大的成長是什麼?
    value: 
    type: textarea
  reportScholarship:
    label: 您認為獎學金對您海外研修最大的幫助是什麼? 有無獎學金是否會改變您的出國計畫?
    value: 
    type: textarea
  reportTestimonial:
    label: 感言及心得感想
    value: 
    type: textarea
  reportEnglish:
    label: 英文心得(包含學校簡介、課程學習、生活學習、具體效益、心得感想等等)
    value: 
    type: textarea
...

 *
 */

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
