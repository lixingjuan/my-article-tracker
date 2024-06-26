/* ****************************************************************************************************
 * 实现：子类.prototype 指向 父类实例
 * 缺点；1. 创建子类实例时无法向父类传参；
 *      2. 父类的引用类型属性会被所有实例共享；
 ************************************************************************************************* */

const Animal = function () {};
Animal.prototype.colors = ["red", "green", "blue", "yellow"];
Animal.prototype.sayHello = function () {
  console.log("hello");
};

const Dog = function (name) {
  this.name = name;
};
Dog.prototype = new Animal();
Dog.prototype.bark = function () {
  console.log(this.name + "," + "Woof! Woof!");
};

const dog1 = new Dog("Max");
dog1.bark();
