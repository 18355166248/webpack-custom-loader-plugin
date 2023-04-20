# 测试 webpack

## 在 loaders 内写自定义 loader

loader API

| 方法名                  | 含义                                       | 用法                                           |
| ----------------------- | ------------------------------------------ | ---------------------------------------------- |
| this.async              | 异步回调 loader。返回 this.callback        | const callback = this.async()                  |
| this.callback           | 可以同步或者异步调用的并返回多个结果的函数 | this.callback(err, content, sourceMap?, meta?) |
| this.getOptions(schema) | 获取 loader 的 options                     | this.getOptions(schema)                        |
| this.emitFile           | 产生一个文件                               | this.emitFile(name, content, sourceMap)        |
| this.utils.contextify   | 返回一个相对路径                           | this.utils.contextify(context, request)        |
| this.utils.absolutify   | 返回一个绝对路径                           | this.utils.absolutify(context, request)        |


[参考文章](https://blog.csdn.net/zxd1435513775/article/details/125373851)

## 在 plugins 内写自定义 plugin

执行 yarn debugger

输入 For help 后面的地址进入 node 地址, 打开控制台点击绿色 node 图标. 这个时候在代码中输入 debugger 就可以打断点调试了


[参考文章](https://blog.csdn.net/zxd1435513775/article/details/125386977?spm=1001.2014.3001.5502)

[compiler hooks](https://www.webpackjs.com/api/compiler-hooks/)

一个 compilation 对象会对构建依赖图中所有模块，进行编译。 在编译阶段，模块会被加载(load)、封存(seal)、优化(optimize)、 分块(chunk)、哈希(hash)和重新创建(restore)


