var int_encoder = require('../lib/int-encoder.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/


exports['encode'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'encoder': function(test) {

    var test_values = [0, 1, 2, 3, 62, 100,1000,354324523453245];

    test_values.forEach(function(i){
      var encoded = int_encoder.encode( i );
      test.ok( i.toString().length >= encoded.toString().length, 'encoded string is equal to or longer than int' );
      test.equal(i,int_encoder.decode(encoded),'decoded string is same as input');
    });

    var hex = 'e6c6b53d3c8160b22dad35a0f705ec09', encoded_hex = int_encoder.encode(hex,16);

    test.equal(encoded_hex,'hbDcW9aE89tzLYjDgyzajJ', 'should encode large hex values');
    
    test.equal(int_encoder.decode(encoded_hex, 16),'e6c6b53d3c8160b22dad35a0f705ec09',  'should decode large hex values');
    
    test.done();
  },
  'errors':function(test){

    test.throws(function(){
      int_encoder.encode('not an int');
    }, Error, 'encode should only accept ints');
    
    test.throws(function(){
      int_encoder.encode(-1);
    }, Error, 'encode should only accept ints greater or equal to zero');

    test.throws(function(){
      int_encoder.decode('(*)&^*&(^');
    }, Error, 'decode should only accept strings made of defined alphabet');

    test.throws(function(){
      int_encoder.alphabet('aa');
    }, Error, 'each char in alphabet must be unique');

    test.done();
  }
};
