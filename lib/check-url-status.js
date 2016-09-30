'use strict'

const url = require('url')
const validUrl = require('valid-url')
const pkg = require('../package.json')
const validStart = require('./valid-start')

module.exports = (uri, callback) => {
  if (!uri) {
    return callback(new Error('Missing required input: uri'), null)
  }

  if (!validUrl.isWebUri(uri)) {
    return callback(new Error('Supplied uri is not valid'), null)
  }

  if (!validStart(uri)) {
    return callback(new Error('Supplied uri is not valid'), null)
  }

  const protocol = /https/.test(uri) ? 'https' : 'http'
  const http = require(protocol)
  const options = url.parse(uri)

  options.agent = false
  options.headers = {
    'User-Agent': `${pkg.name}/${pkg.version}`,
    'Accept': '*/*'
  }

  http.get(options, response => {
    return callback(null, response.statusCode)
  }).on('error', error => callback(error))
}
