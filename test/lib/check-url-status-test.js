'use strict'

const test = require('ava')
const checkUrlStatus = require('../../lib/check-url-status')

test('Requires url', t => {
  const url = false
  const expectedErrorMessage = 'Missing required input: uri'
  checkUrlStatus(url, (error, statusCode) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test.cb('Returns expected status code for https', t => {
  const url = 'https://www.npmjs.com'
  checkUrlStatus(url, (error, statusCode) => {
    if (error) {
      throw error
    } else {
      t.deepEqual(statusCode, 200, '200 OK')
      t.end()
    }
  })
})
