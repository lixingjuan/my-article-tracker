/* ****************************************************************************************************
 *                                    闭包写法
 ************************************************************************************************* */
let extent = (() => {
  let value = 0;

  return {
    call: () => {
      value = value + 1;
      console.log(value);
    },
  };
})();

extent.call(); // 1
extent.call(); // 2
extent.call(); // 3

/* ****************************************************************************************************
 *                                    面向对象写法
 ************************************************************************************************* */
extent = {
  value: 0,

  call: function () {
    this.value++;
    console.log(this.value);
  },
};

extent.call(); // 1
extent.call(); // 2
extent.call(); // 3

/* ****************************************************************************************************
 *                                    面向对象写法2
 ************************************************************************************************* */
const Extent = function () {
  this.value = 0;
};
Extent.prototype.call = function () {
  this.value++;
  console.log(this.value);
};

extent = new Extent();

extent.call(); // 1
extent.call(); // 2
extent.call(); // 3
