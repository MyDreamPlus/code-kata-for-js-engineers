var assert = require('chai').assert;
var ArrayUtil = require('../main/kata/arrayutil')

suite('ArrayUtil', function() {
  suite('#dedup()', function() {
    var data = ['andy', 'bob', 'matt', 'jim', 'bill', 'jacob', 'bill', 'andy', 'bob', 'bill', 'bob', 'bill'];
    var expected = ['andy', 'bob', 'matt', 'jim', 'bill', 'jacob'];

    test('should return an array', function() {
        var result = ArrayUtil.dedup(data);
        assert.isArray(result);
    });

    test('should return an array with ' + expected.length + ' elements', function() {
        var result = ArrayUtil.dedup(data);
        assert.lengthOf(result, expected.length);
    });

    test('should return an array contains ' + expected.join(','), function() {
        var result = ArrayUtil.dedup(data);
        assert.sameMembers(result, expected);
    });
  });
});
