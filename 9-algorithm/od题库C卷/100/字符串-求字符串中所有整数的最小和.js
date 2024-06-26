/**
 * @题目描述
 * 输入字符串s，输出s中包含所有整数的最小和。
 * 说明:
 * 字符串s，只包含 a-z A-Z±;
 * 合法的整数包括
 * 正整数 一个或者多个0-9组成，如023 002 102
 * 负整数 负号(-)开头，数字部分由一个或者多个0-9组成，如 -0 -012 -23 -00023
 *
 * @输入描述
 * 包含数字的字符串
 *
 * @输出描述
 * 所有整数的最小和
 *
 * @用例1
 * 输入:  bb1234aa
 * 输出:  10
 *
 * @用例2
 * 输入:  bb12-34aa
 * 输出:  -31
 * 说明
 * 1+2+(-34)=-31
 */

// const getNumSum = (c) => {
//   return [...c].reduce((pre, cur) => pre + parseInt(cur), 0);
// };

const demo = (line) => {
  const numArr = line.split(/[^\d-]+/);
  let res = 0;

  console.log(numArr);
  for (const num of numArr) {
    if (!num) {
      continue;
    }

    if (!num.includes("-")) {
      res += getNumSum(num);
      continue;
    }

    const isNeg = num.startsWith("-"); // 用来判断第一个元素是否是负数
    const subNumArr = num.split("-"); // 可以认为除了第一个，后面的都是负数

    for (let i = 0; i < subNumArr.length; i++) {
      if (subNumArr[i]) {
        const ele = parseInt(subNumArr[i]);
        if (i === 0) {
          res += isNeg ? 0 - ele : getNumSum(subNumArr[i]);
        } else {
          res -= ele;
        }
      }
    }
  }
  return res;
};

// 测试用例
console.log(demo("bb1234aa")); // 输出: 10
console.log(demo("bb12-34aa")); // 输出: -31
