# int-encoder

a simple utitlity to encode and decode ints from a predefined alphabet

this includes support for big integers via https://github.com/justmoon/node-bignum

some good uses of this utility include:

- reducing the number of characters required to express a numerical value
- interpreting numerical values expressed in unconventional bases/alphabets

some bad uses of this utility include:
- number obfuscation


## usage
```
npm install int-encoder
```

```javascript
var encoder = require('int-encoder')

encoder.encode(12345678) // "ZXP0"
encoder.decode('ZXP0') // 12345678

//invoke custom alphabet option
encoder.alphabet('0123456789abcdef') // hex alphabet

encoder.encode(255) // "ff"
encoder.decode('ff') // 255

//check what alphabet is being used
encoder.alphabet() // 0123456789abcdef

//convert big hex number using optional base argument
encoder.encode('e6c6b53d3c8160b22dad35a0f705ec09', 16) // 'hbDcW9aE89tzLYjDgyzajJ'
encoder.decode('hbDcW9aE89tzLYjDgyzajJ', 16) // 'e6c6b53d3c8160b22dad35a0f705ec09'

```
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
