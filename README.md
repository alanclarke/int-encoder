# int-encoder

a simple utitlity to encode and decode ints from a predefined alphabet

this includes support for big integers via https://github.com/justmoon/node-bignum

some good uses of this utility include:

- reducing the number of characters required to express a numerical value
- interpreting numerical values expressed in unconventional bases/alphabets

some bad uses of this utility include:
- number obfuscation


## Getting Started
Install the module with: `npm install int-encoder`

```javascript
var int_encoder = require('int-encoder');

int_encoder.encode(12345678); // "ZXP0"
int_encoder.decode('ZXP0'); // 12345678

//invoke custom alphabet option
int_encoder.alphabet('0123456789abcdef') // hex alphabet

int_encoder.encode(255); // "ff"
int_encoder.decode('ff'); // 255

//check what alphabet is being used
int_encoder.alphabet() // 0123456789abcdef

//convert big hex number using optional base argument
int_encoder.encode('e6c6b53d3c8160b22dad35a0f705ec09', 16); // 'hbDcW9aE89tzLYjDgyzajJ'
int_encoder.decode('hbDcW9aE89tzLYjDgyzajJ', 16); // 'e6c6b53d3c8160b22dad35a0f705ec09'

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## License
Copyright (c) 2012 alan clarke  
Licensed under the MIT license.
