/**
 * @题目描述
 * 园区某部门举办了Family Day，邀请员工及其家属参加；
 * 将公司园区视为一个矩形，起始园区设置在左上角，终点园区设置在右下角；
 * 家属参观园区时，只能向右和向下园区前进，求从起始园区到终点园区会有多少条
 *
 * @输入描述
 * 输入第一行为园区的长和宽；
 *
 * 接下来每一行表示该园区是否可以参观，0表示可以参观，1表示不可以参观。
 *
 * @输出描述
 * 输出为不同路径的数量
 *
 * @示例1
 * 输入：
 * 3 3
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 * 输出：
 * 2
 */

function countPaths(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  // 初始化起点
  dp[0][0] = grid[0][0] === 0 ? 1 : 0;

  // 初始化第一行和第一列
  for (let i = 1; i < rows; i++) {
    dp[i][0] = grid[i][0] === 0 ? dp[i - 1][0] : 0;
  }

  for (let j = 1; j < cols; j++) {
    dp[0][j] = grid[0][j] === 0 ? dp[0][j - 1] : 0;
  }

  // 填充dp表
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (grid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[rows - 1][cols - 1];
}

// 测试用例
console.log(
  countPaths([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); // 2

console.log(
  countPaths([
    [0, 1],
    [0, 0],
  ])
); // 1

console.log(
  countPaths([
    [0, 0],
    [1, 0],
  ])
); // 1

console.log(
  countPaths([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // 6

console.log(
  countPaths([
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
); // 1
