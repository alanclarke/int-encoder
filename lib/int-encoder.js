/*
 * int-encoder
 * https://github.com/alanclarke/int-encoder
 * hex: 0123456789abcdef
 * base64: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_
 */

var bignum = require('bignum')
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'

function encode (value, base) {
  value = bignum(String(value), base)
  if (value.eq(0)) return alphabet[0]
  var current
  var result = ''
  while (value.gt(0)) {
    current = value.mod(alphabet.length)
    result = alphabet[current] + result
    value = value.sub(current).div(alphabet.length)
  }
  return result
}

function decode (str, base) {
  var i, index
  var result = bignum(0)
  for (i = 0; i < str.length; i++) {
    index = bignum(alphabet.indexOf(str[i]))
    result = result.add(index.mul(bignum(alphabet.length).pow(str.length - 1 - i)))
  }
  return result.toString(base)
}

function alphabetr (val) {
  if (val) alphabet = val
  return alphabet
}

module.exports = {
  encode: encode,
  decode: decode,
  alphabet: alphabetr
}
