'use strict'

const test = require('ava')
const validStart = require('../../lib/valid-start')

test('valid-start returns expected response', t => {
  t.deepEqual(validStart('https://www.google.com'), true, 'Returns true for valid start')
  t.deepEqual(validStart('https://http://www.google.com'), false, 'Returns false for invalid start')
  t.deepEqual(validStart('http://https://www.google.com'), false, 'Returns false for invalid start')
})
