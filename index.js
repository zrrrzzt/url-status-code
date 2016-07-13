'use strict'

const checkUrlStatus = require('./lib/check-url-status')

module.exports = (url, callback) => {
  checkUrlStatus(url, (error, statusCode) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, statusCode)
    }
  })
}
