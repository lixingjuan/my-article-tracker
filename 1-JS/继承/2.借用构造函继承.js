/* ****************************************************************************************************
 *  实现思路：在子类的作用域中执行父类
 *  解决的问题：1. 支持向父类传参； 2. “引用类型值的原型属性” 会被所有实例共享；
 *  问题：1. 只能继承属性，无法继承方法；2. 方法必须定义在子类内部, 复用性差
 *************************************************************************************************** */

function Animal(name) {
  this.colors = ["pink", "black"];
  this.name = name;
}

function Dog(...args) {
  Animal.apply(this, args);
}

Dog.prototype.bark = function () {
  console.log("Woof! Woof!" + this.name);
};

const dog1 = new Dog("Max");
const dog2 = new Dog("Jall");
dog1.bark();
console.log(dog1.colors);
dog1.colors[2] = "red";
console.log(dog1.colors);

dog2.bark();
console.log(dog2.colors);
