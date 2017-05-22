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

test('URL must be valid', t => {
  const url = 'pysjepreik'
  const expectedErrorMessage = 'Supplied uri is not valid'
  checkUrlStatus(url, (error, statusCode) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('URL must have valid start', t => {
  const url = 'http://https://www.google.com'
  const expectedErrorMessage = 'Supplied uri is not valid'
  checkUrlStatus(url, (error, statusCode) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test.cb('Returns error as expected', t => {
  const url = 'http://detteerenurlsomsannsynligviseikkefinnes.no'
  checkUrlStatus(url, (error, statusCode) => {
    if (error) {
      t.truthy(error, 'Got error')
      t.end()
    }
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

test.cb('Returns expected status code for http', t => {
  const url = 'http://www.npmjs.com'
  checkUrlStatus(url, (error, statusCode) => {
    if (error) {
      throw error
    } else {
      t.deepEqual(statusCode, 301, '301 OK')
      t.end()
    }
  })
})
