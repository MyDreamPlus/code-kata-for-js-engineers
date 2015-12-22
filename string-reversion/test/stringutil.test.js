var assert = require('chai').assert;
var StringUtil = require('../main/kata/stringutil')

suite('StringUtil', function() {
  suite('#reverse()', function() {
    var data = 'asdfghjklqwertyuiop';
    var expected = 'poiuytrewqlkjhgfdsa';

    test('should return a string', function() {
        var result = StringUtil.reverse(data);
        assert.isString(result);
    });

    test('should return a string with length ' + expected.length, function() {
        var result = StringUtil.reverse(data);
        assert.lengthOf(result, expected.length);
    });

    test('should return a string equals ' + expected, function() {
        var result = StringUtil.reverse(data);
        assert.equal(result, expected);
    });
  });
});
