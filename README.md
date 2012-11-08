# int-encoder

a simple utitlity to encode and decode ints from a predefined alphabet

## Getting Started
Install the module with: `npm install int-encoder`

```javascript
var int_encoder = require('int-encoder');

int_encoder.encode(12345678); // "ZXP0"
int_encoder.decode('ZXP0'); // 12345678

//invoke custom alphabet option
int_encoder.alphabet('0123456789abcdef') //hex alphabet

int_encoder.encode(255); // "ff"
int_encoder.decode('ff'); // 255

//check what alphabet is being used
int_encoder.alphabet() //0123456789abcdef



```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## License
Copyright (c) 2012 alan clarke  
Licensed under the MIT license.
