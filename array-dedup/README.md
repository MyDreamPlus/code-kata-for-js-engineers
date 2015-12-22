### 问题

从数组中移除重复的元素

> 通过实现 ```arrayutil``` 中的 ```dedup``` 方法，将给定数组中的重复元素移除。

### 示例

* ```["bob", "jim", "bill", "bob"]``` -> ```["bob", "jim", "bill"]```
* ```[1, 2, 3, 3, 4, 2]``` -> ```[1, 2, 3, 4]```

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
ArrayUtil
    #dedup()
      1) should return an array
      2) should return an array with 6 elements
      3) should return an array contains andy,bob,matt,jim,bill,jacob


  0 passing (13ms)
  3 failing

  1) ArrayUtil #dedup() should return an array:
     AssertionError: expected null to be an array
      at Function.assert.isArray (node_modules/chai/lib/chai/interface/assert.js:565:35)
      at Context.<anonymous> (test/arrayutil.test.js:11:16)

  2) ArrayUtil #dedup() should return an array with 6 elements:
     TypeError: Cannot read property 'length' of null
      at Assertion.<anonymous> (node_modules/chai/lib/chai/core/assertions.js:865:14)
      at Assertion.ctx.(anonymous function) [as property] (node_modules/chai/lib/chai/utils/addMethod.js:40:25)
      at Assertion.assertLength (node_modules/chai/lib/chai/core/assertions.js:1013:37)
      at Assertion.assert (node_modules/chai/lib/chai/utils/addChainableMethod.js:83:49)
      at Function.assert.lengthOf (node_modules/chai/lib/chai/interface/assert.js:1033:37)
      at Context.<anonymous> (test/arrayutil.test.js:16:16)

  3) ArrayUtil #dedup() should return an array contains andy,bob,matt,jim,bill,jacob:
     AssertionError: expected null to be an array
      at Assertion.<anonymous> (node_modules/chai/lib/chai/core/assertions.js:1518:30)
      at Assertion.ctx.(anonymous function) [as members] (node_modules/chai/lib/chai/utils/addMethod.js:40:25)
      at Function.assert.sameMembers (node_modules/chai/lib/chai/interface/assert.js:1204:43)
      at Context.<anonymous> (test/arrayutil.test.js:21:16)
```

* 完成 ```arrayutil``` 中的 ```dedup``` 方法

```javascript
dedup: function(source){
      return null;
}
```

* 重复执行如下命令，直到测试通过，不再出现异常

```shell
npm test
```
