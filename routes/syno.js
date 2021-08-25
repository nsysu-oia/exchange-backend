const Syno = require('syno')
module.exports = new Syno({
  protocol: 'https',
  host: 'studyabroad.nsysu.edu.tw',
  port: '5001',
  account: process.env.SYNO_ID,
  passwd: process.env.SYNO_PW
})
