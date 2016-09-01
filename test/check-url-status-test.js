'use strict'

const tap = require('tap')
const checkUrlStatus = require('../lib/check-url-status')

tap.test('Requires url', function (test) {
  const url = false
  const expectedErrorMessage = 'Missing required input: url'
  checkUrlStatus(url, (error, statusCode) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('URL must be valid', function (test) {
  const url = 'pysjepreik'
  const expectedErrorMessage = 'Supplied url is not valid'
  checkUrlStatus(url, (error, statusCode) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Returns error as expected', function (test) {
  const url = 'http://detteerenurlsomsannsynligviseikkefinnes.no'
  checkUrlStatus(url, (error, statusCode) => {
    tap.ok(error, 'Got error, indeed')
    test.done()
  })
})

tap.test('Returns expected status code for https', function (test) {
  const url = 'https://www.npmjs.com'
  checkUrlStatus(url, (error, statusCode) => {
    if (error) {
      throw error
    }
    tap.equal(statusCode, 200, '200 OK')
    test.done()
  })
})

tap.test('Returns expected status code for http', function (test) {
  const url = 'http://www.npmjs.com'
  checkUrlStatus(url, (error, statusCode) => {
    if (error) {
      throw error
    }
    tap.equal(statusCode, 301, '301 OK')
    test.done()
  })
})
