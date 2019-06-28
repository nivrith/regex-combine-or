# regex-combine-or

[![travis](https://travis-ci.org/nivrith/regex-combine-or.svg?branch=master)](https://travis-ci.org/nivrith/regex-combine-or)
[![NPM Downloads](https://img.shields.io/npm/dw/regex-combine-or.svg)](https://www.npmjs.com/package/regex-combine-or)
[![node](https://img.shields.io/node/v/regex-combine-or.svg)](https://www.npmjs.com/package/regex-combine-or)
[![License MIT](https://img.shields.io/github/license/nivrith/regex-combine-or.svg?style=flat-square)](https://github.com/nivrith/regex-combine-or/blob/master/LICENSE)

Combines an array of regexes into a single regex using `or` operator `|`.

## Usage

```js

// async

const { regexCombineOr } = require('regex-combine-or');

let regex = regexCombineOr(/node_modules/, /bower_components/);

console.log(regex)// /(node_modules)|(bower_components)/

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
