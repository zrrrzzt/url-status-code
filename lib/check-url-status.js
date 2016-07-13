'use strict'

module.exports = (url, callback) => {
  if (!url) {
    return callback(new Error('Missing required input: url'), null)
  }

  const protocol = /https/.test(url) ? 'https' : 'http'
  const http = require(protocol)

  http.get(url, response => {
    return callback(null, response.statusCode)
  }).on('error', error => {
    return callback(error)
  })
}
