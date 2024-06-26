/**
 * @题目描述
 * 某部门计划通过结队编程来进行项目开发，已知该部门有 N 名员工，每个员工有独一无二的职级，每三个员工形成一个小组进行结队编程，结队分组规则如下：
 * 从部门中选出序号分别为 i、j、k 的3名员工，他们的职级分别为 level[i]，level[j]，level[k]，结队小组满足 level[i] < level[j] < level[k] 或者 level[i] > level[j] > level[k]，其中 0 ≤ i < j < k < n。
 * 请你按上述条件计算可能组合的小组数量。同一员工可以参加多个小组。
 *
 * @输入描述
 * 第一行输入：员工总数 n
 * 第二行输入：按序号依次排列的员工的职级 level，中间用空格隔开
 *
 * 备注：
 * 1 <= n <= 6000
 * 1 <= level[i] <= 10^5
 *
 * @输出描述
 * 可能结队的小组数量
 *
 * @示例1
 * 输入：
 * 4
 * 1 2 3 4
 *
 * 输出：
 * 4
 *
 * 说明：
 * 可能结队成的组合(1,2,3)、(1,2,4)、(1,3,4)、(2,3,4)
 *
 * @示例2
 * 输入：
 * 3
 * 5 4 7
 *
 * 输出：
 * 0
 *
 * 说明：
 * 根据结队条件，我们无法为该部门组建小组
 */

/**
 * 解题思路：
 * 统计每个员工左侧和右侧的职级情况，然后根据统计，得出每个员工作为中间员工的组合数
 */

function countTeams(levels) {
  const len = levels.length;
  let leftSmallerCount = new Array(len).fill(0);
  let leftGreaterCount = new Array(len).fill(0);
  let rightSmallerCount = new Array(len).fill(0);
  let rightGreaterCount = new Array(len).fill(0);

  // 预计算每个员工左侧的职级比较情况
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (levels[j] < levels[i]) {
        leftSmallerCount[i]++;
      } else if (levels[j] > levels[i]) {
        leftGreaterCount[i]++;
      }
    }
  }

  // 预计算每个员工右侧的职级比较情况
  for (let i = len - 2; i >= 0; i--) {
    for (let j = len - 1; j > i; j--) {
      if (levels[j] < levels[i]) {
        rightSmallerCount[i]++;
      } else if (levels[j] > levels[i]) {
        rightGreaterCount[i]++;
      }
    }
  }

  let ans = 0;
  // 计算可能的队伍数量
  for (let i = 0; i < len; i++) {
    // !! 这个计算式子非常重要
    ans += leftSmallerCount[i] * rightGreaterCount[i] + leftGreaterCount[i] * rightSmallerCount[i];
  }

  return ans;
}

console.log(countTeams([1, 2, 3, 4])); // 输出: 4
console.log(countTeams([1, 2, 3, 5])); // 输出: 4
console.log(countTeams([5, 4, 7])); // 输出: 0
console.log(countTeams([1, 2, 3, 4, 5]));
