'use strict'

module.exports = url => {
  var valid = true

  if (url.startsWith('http://https://')) {
    valid = false
  }

  if (url.startsWith('https://http://')) {
    valid = false
  }

  return valid
}
