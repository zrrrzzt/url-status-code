[![Build Status](https://travis-ci.org/zrrrzzt/url-status-code.svg?branch=master)](https://travis-ci.org/zrrrzzt/url-status-code)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/url-status-code/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/url-status-code?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# url-status-code

Get status code for url.

## Installation

From npm

```sh
$ npm i url-status-code
```

## Usage

```JavaScript
(async () => {
  const urlStatusCode = require('url-status-code')
  const url = 'https://www.npmjs.com'
  try {
    const status = await urlStatusCode(url)
    console.log(status)
  } catch (error) {
    console.error(error)
  }
})()
//=> 200
```

or you can use callback

```JavaScript

const urlStatusCode = require('url-status-code')
const url = 'https://www.npmjs.com'

urlStatusCode(url, (error, statusCode) => {
  if (error) {
    console.error(error)
  } else {
    console.log(statusCode)
  }
})

// => 200
```

## License

[MIT](LICENSE)
