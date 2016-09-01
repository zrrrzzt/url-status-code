'use strict'

const validUrl = require('valid-url')

module.exports = (url, callback) => {
  if (!url) {
    return callback(new Error('Missing required input: url'), null)
  }

  if (!validUrl.isWebUri(url)) {
    return callback(new Error('Supplied url is not valid'), null)
  }

  const protocol = /https/.test(url) ? 'https' : 'http'
  const http = require(protocol)

  http.get(url, response => {
    return callback(null, response.statusCode)
  }).on('error', error => {
    return callback(error)
  })
}
