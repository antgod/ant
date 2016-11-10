const PreCatchPromise = require('./preCatchPromise')

const p = new PreCatchPromise(res => res('第一次返回数据'))
/*
 * 增加了全局catch功能，这样就能全局捕获promise异常并且做其他处理，可以打印到页面
 * */
.catch(error => console.log('全局打印异常', error))
.then((data) => {
  console.log(data)
  // 这里作为测试功能,可以注释掉测试Promise其他功能
  throw new Error('this is a new exception')
  /* eslint-disable no-unreachable */
  return new PreCatchPromise(res => res('第二次返回数据'))
})
.then(() => '第三次返回数据')
.then(data => console.log(data))

p.then(() => console.log('连续返回数据'))
