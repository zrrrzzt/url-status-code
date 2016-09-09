'use strict'

const tap = require('tap')
const validStart = require('../lib/valid-start')

tap.equal(validStart('https://www.google.com'), true, 'Returns true for valid start')

tap.equal(validStart('https://http://www.google.com'), false, 'Returns false for invalid start')

tap.equal(validStart('http://https://www.google.com'), false, 'Returns false for invalid start')
