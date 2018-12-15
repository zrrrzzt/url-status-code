'use strict'

// const validUrl = require('valid-url')
const urlStatusCode = require('./index')
const url = 'http://www.npmjs.com'
// const url = 'http://www.google.com'

urlStatusCode(url, (error, statusCode) => {
  if (error) {
    console.error(error)
  } else {
    console.log(statusCode)
  }
})

// console.log(validUrl.isWebUri(url))
