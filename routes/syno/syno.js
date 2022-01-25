const axios = require('axios')
const authURI = 'https://studyabroad.nsysu.edu.tw:5001/webapi/auth.cgi?'
const loginParams = new URLSearchParams({
  api: 'SYNO.API.Auth',
  version: 7,
  method: 'login',
  account: process.env.SYNO_ID,
  passwd: process.env.SYNO_PW,
  format: 'sid'
})
const logoutParams = new URLSearchParams({
  api: 'SYNO.API.Auth',
  version: 7,
  method: 'logout'
})

module.exports = {
  synoLogin: session => {
    loginParams.append('session', session)
    return axios.get(authURI + loginParams.toString())
  },
  synoLogout: session => {
    logoutParams.append('session', session)
    return axios.get(authURI + logoutParams.toString())
  }
}
