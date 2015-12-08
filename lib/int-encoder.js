/*
 * int-encoder
 * https://github.com/alanclarke/int-encoder
 * 'hex': '0123456789abcdef',
 * 'reset': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
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
  var result = bignum(0)
  each(str, function (val, i) {
    var index = bignum(alphabet.indexOf(val))
    result = result.add(index.mul(bignum(alphabet.length).pow(str.length - 1 - i)))
  })
  return result.toString(base)
}

function alphabetr (val) {
  if (val) alphabet = val
  return alphabet
}

function each (arr, fn) {
  for (var i = 0; i < arr.length; i++) fn(arr[i], i)
}

module.exports = {
  encode: encode,
  decode: decode,
  alphabet: alphabetr
}
