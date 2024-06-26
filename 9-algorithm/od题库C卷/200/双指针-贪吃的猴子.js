/**
 * @题目描述
 * 一只贪吃的猴子，来到一个果园，发现许多串香蕉排成一行，每串香蕉上有若干根香蕉。每串香蕉的根数由数组numbers给出。猴子获取香蕉，每次都只能从行的开头或者末尾获取，并且只能获取N次，求猴子最多能获取多少根香蕉。
 *
 * @输入描述
 * 第一行为数组numbers的长度
 *
 * 第二行为数组numbers的值每个数字通过空格分开
 *
 * 第三行输入为N，表示获取的次数
 *
 * @输出描述
 * 按照题目要求能获取的最大数值
 *
 * @示例1
 * 输入
 * 7
 * 1 2 2 7 3 6 1
 * 3
 *
 * 输出
 * 10
 *
 * @示例2
 * 输入
 * 3
 * 1 2 3
 * 3
 *
 * 输出
 * 6
 *
 * 说明
 * 全部获取所有的香蕉，因此最终根数为1+2+3 = 6
 *
 * @示例3
 * 输入
 * 4
 * 4 2 2 3
 * 2
 *
 * 输出
 * 7
 *
 * 说明
 * 第一次获取香蕉为行的开头，第二次获取为行的末尾，因此最终根数为4+3 =7
 * 备注
 *
 * 1<= numbers.length <= 100000
 *
 * 1<= numbers <= 100
 *
 * 1 <= N <= numbers.length
 */

function maxBananas(numbers, N) {
  const len = numbers.length;
  let prefixSum = new Array(len + 1).fill(0);

  // !! 计算前缀和，prefixSum[i]表示从prefixSum[0]到prefixSum[i-1]的和
  for (let i = 1; i <= len; i++) {
    prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
  }

  // 如果N次足以拿完所有香蕉，则直接返回总和
  if (N >= len) {
    return prefixSum[len];
  }

  let maxBananas = 0;
  // 尝试所有可能的拿取方式
  for (let i = 0; i <= N; i++) {
    // !! 从前面拿取i个，从后面拿取N-i个
    // 前面拿取香蕉的总数
    let fromFront = prefixSum[i];
    // 后面拿取香蕉的总数
    let fromBack = prefixSum[len] - prefixSum[len - (N - i)];
    maxBananas = Math.max(maxBananas, fromFront + fromBack);
  }

  return maxBananas;
}

// 示例
console.log(maxBananas([1, 10, 1, 7, 20, 10, 1], 3) === 31);
console.log(maxBananas([1, 2, 3], 3) === 6);
console.log(maxBananas([4, 2, 2, 3], 2) === 7);
