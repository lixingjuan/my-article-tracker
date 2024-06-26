// loaders/simple-style-loader.js

const loaderUtils = require('loader-utils');
module.exports = function (source) {
  console.log("source", source);
}

module.exports.pitch = function (remainingRequest) {
   const cssPath = loaderUtils.stringifyRequest(this, "!!" + remainingRequest);


  // TODO 所以应该是 css文件模块导入方式的问题 为什么import 会报错呢？
  const res = `
  // 创建 style 标签
  let style = document.createElement('style');
  /**
  * 利用 remainingRequest 参数获取 loader 链的剩余部分
  * 利用 ‘!!’ 前缀跳过其他 loader
  * 利用 loaderUtils 的 stringifyRequest 方法将模块的绝对路径转为相对路径
  * 将获取 css 的 require 表达式赋给 style 标签
  */
  style.innerHTML = import ${cssPath};
  // 将 style 标签插入 head
  document.head.appendChild(style);
  `
  return res
}