'use strict'

const test = require('ava')
const checkUrlStatus = require('../../index')

test.cb('Requires url', t => {
  const url = false
  const expectedErrorMessage = 'Missing required input: uri'
  checkUrlStatus(url)
    .then(code => console.log(code))
    .catch(error => {
      t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
      t.end()
    })
})

test.cb('Returns expected status code for https', t => {
  const url = 'https://www.npmjs.com'
  checkUrlStatus(url)
    .then(statusCode => {
      t.deepEqual(statusCode, 200, '200 OK')
      t.end()
    }).catch(error => {
      throw error
    })
})
