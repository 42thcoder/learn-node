主要是熟悉 node 的模块加载机制, 九浅一深讲得很清楚了.

几个点:
- require 目录会去读 package.json
- node -e 'alert()' 类似 eval
- exports = module.exports = {} , 所以每个模块默认返回 {}
