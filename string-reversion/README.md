### 问题

反转字符串

> 通过实现 ```stringutil``` 中的 ```reverse``` 方法，将给定字符串进行反转。

### 示例
* ```asdfg``` -> ```gfdsa```
* ```money``` -> ```yenom```

### 说明

* 安装依赖

```shell
npm install
```

* 在命令行中运行

```shell
npm test
```

* 出现如下异常

```shell
StringUtil
    #reverse()
      1) should return a string
      2) should return a string with length 19
      3) should return a string equals poiuytrewqlkjhgfdsa


  0 passing (17ms)
  3 failing

  1) StringUtil #reverse() should return a string:
     AssertionError: expected null to be a string
      at Function.assert.isString (node_modules/chai/lib/chai/interface/assert.js:601:35)
      at Context.<anonymous> (test/stringutil.test.js:11:16)

  2) StringUtil #reverse() should return a string with length 19:
     TypeError: Cannot read property 'length' of null
      at Assertion.<anonymous> (node_modules/chai/lib/chai/core/assertions.js:865:14)
      at Assertion.ctx.(anonymous function) [as property] (node_modules/chai/lib/chai/utils/addMethod.js:40:25)
      at Assertion.assertLength (node_modules/chai/lib/chai/core/assertions.js:1013:37)
      at Assertion.assert (node_modules/chai/lib/chai/utils/addChainableMethod.js:83:49)
      at Function.assert.lengthOf (node_modules/chai/lib/chai/interface/assert.js:1033:37)
      at Context.<anonymous> (test/stringutil.test.js:16:16)

  3) StringUtil #reverse() should return a string equals poiuytrewqlkjhgfdsa:
     AssertionError: expected null to equal 'poiuytrewqlkjhgfdsa'
      at Context.<anonymous> (test/stringutil.test.js:21:16)
```

* 完成 ```stringutil``` 中的 ```reverse``` 方法

```javascript
reverse: function(source){
      return null;
}
```

* 重复执行如下命令，直到测试通过，不再出现异常

```shell
npm test
```
