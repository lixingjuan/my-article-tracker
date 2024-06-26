

/**
 * pick candy
 * @param arr int整型一维数组 the array
 * @return int整型
 */

/** 贪心算法-分糖果问题 */
function candy(arr) {
  const len = arr.length;
  const memo = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    if (arr[i] > arr[i - 1]) {
      memo[i] = memo[i - 1] + 1;
    }
  }
  for (let i = len - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      memo[i] = Math.max(memo[i], memo[i + 1] + 1);
    }
  }
  return memo.reduce((a, b) => a + b, 0);
}

module.exports = {
  candy: candy,
};
