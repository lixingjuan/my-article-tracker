/**
 * @题目描述
 * 给定两个字符串，分别为字符串A与字符串B。
 * 例如A字符串为ABCABBA，B字符串为CBABAC可以得到下图 m*n 的二维数组，定义原点为(0, 0)，终点为(m, n)，水平与垂直的每一条边距离为1，映射成坐标系如下图。
 * 从原点(0, 0)到(0, A)为水平边，距离为1，从(0, A)到(A, C)为垂直边，距离为1；
 *
 * 假设两个字符串同一位置的两个字符相同则可以作一个斜边，如(A, C)到(B, B)最短距离为斜边，距离同样为1。
 * 作出所有的斜边如下图，(0, 0)到(B, B)的距离为 1个水平边 + 1个垂直边 + 1个斜边 = 3。
 *
 * "../两个字符串间的最短路径问题-1.png"
 *
 * 根据定义可知，原点到终点的最短距离路径如下图红线标记，最短距离为：9
 * "../两个字符串间的最短路径问题-2.png"
 *
 * @输入描述
 * 空格分割的两个字符串A与字符串B，字符串不为“空串”，字符格式满足正则规则:[A-Z]，字符串长度<10000
 *
 * @输出描述
 * 原点到终点的最短距离
 *
 * @示例1
 * 输入：
 * ABC ABC
 *
 * 输出：
 * 3
 *
 * @示例2
 * 输入：
 * ABCABBA CBABAC
 *
 * 输出：
 * 9
 */

function shortestPath(A, B) {
  let rowNum = A.length;
  let colNum = B.length;

  let dp = Array.from(Array(rowNum + 1), () => Array(colNum + 1).fill(0));

  // 初始化边界条件
  for (let i = 0; i <= rowNum; i++) dp[i][0] = i;
  for (let j = 0; j <= colNum; j++) dp[0][j] = j;

  // 动态规划计算
  for (let i = 1; i <= rowNum; i++) {
    for (let j = 1; j <= colNum; j++) {
      // 如果字符窜匹配
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 字符串不匹配：Math.min(从上面来的最短距离，从左边来的最短距离)
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[rowNum][colNum];
}

// 测试示例
console.log(shortestPath("ABC", "ABC")); // 输出：3
