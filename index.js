'use strict'

const checkUrlStatus = require('./lib/check-url-status')

module.exports = (url, callback) => {
  return new Promise((resolve, reject) => {
    checkUrlStatus(url, (error, statusCode) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      } else {
        return callback ? callback(null, statusCode) : resolve(statusCode)
      }
    })
  })
}
