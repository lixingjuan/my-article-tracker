const myNew = function (_constructor, ...args) {
  // 1. 创建一个新对象, 并完成原型链接
  const inner = Object.create(_constructor.prototype);

  // 2. 将新创建对象环境作为执行上下文，执行参数构造函数，并传入参数
  const result = _constructor.apply(inner, args);

  // 3. 若构造函数返回一个对象，则这个对象会成为“new”表达式的结果，否则默认返回新创建的对象
  return result instanceof Object ? result : inner;
};
