/** this关键字的绑定，取决于函数的调用方式，而不是定义方式 */

/**
 * this的调用四种情况
 * 1. 作为对象的方法调用：this指向该对象
 * 2. 作为普通函数调用：执行全局对象，浏览器中为window; "use strict" 模式为 undefined
 * 3. 构造器调用：this指向实例
 * 4. call,apply调用
 */

/** 1. 作为对象的方法调用: this指向该对象 */

const obj1 = {
  name: "obj1",
  getName: function () {
    return this.name; // this指向obj
  },
};
console.log(obj1.getName());

/** 2. 作为普通函数调用，返回window, 如果是严格模式下“use strict”，this指向undefined */

const getName4 = function () {
  "use strict";
  console.log(this);
};
getName4();

/** 3. 构造器调用，this指向实例 */

const myClass = function () {
  this.name = "lixingjuan"; // this指向新创建的实例
};
const obj6 = new myClass();
console.log(obj6.name);

/**
 * 4. Function.prototype.call 或 Function.prototype.apply 调用
 * call和apply可以动态修改传入函数的this
 * */

const obj9 = {
  name: "obj9",
};
const obj10 = {
  name: "obj10",
  getName: function () {
    return this.name;
  },
};

console.log(obj10.getName()); // obj10
console.log(obj10.getName.call(obj9)); // obj9

/**
 * !! 另外，箭头函数不绑定自己的this, 他们继承自包围他们的最近的非箭头函数的this值
 */
