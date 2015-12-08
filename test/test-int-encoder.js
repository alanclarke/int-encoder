var intEncoder = require('../lib/int-encoder')
intEncoder.alphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
exports.encode = {
  encoder: function (test) {
    var hex = 'e6c6b53d3c8160b22dad35a0f705ec09'
    var values = [0, 1, 2, 3, 62, 100, 1000, 354324523453245]
    values.forEach(function (i) {
      var encoded = intEncoder.encode(i)
      test.ok(String(i).length >= String(encoded).length, 'encoded string is equal to or longer than int')
      test.equal(i, intEncoder.decode(encoded), 'decoded string is same as input')
    })
    var encoded = intEncoder.encode(hex, 16)
    test.equal(encoded, 'hbDcW9aE89tzLYjDgyzajJ', 'should encode large hex values')
    test.equal(intEncoder.decode(encoded, 16), 'e6c6b53d3c8160b22dad35a0f705ec09', 'should decode large hex values')
    test.done()
  }
}
