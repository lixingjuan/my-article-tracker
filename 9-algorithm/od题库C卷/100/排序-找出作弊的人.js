/**
 * @题目
 * 公司组织了一次考试,现在考试结果出来了，想看一下有没人存在作弊行为,但是员工太多了,需要先对员工进行一次过滤,再进一步确定 是否存在作弊行为。
 * 过滤的规则为:找到分差最小的员工ID对(p1,p2)列表,要求p1<p2员工个数,取值范国:0<n<100000
 * 员工ID为整数,取值范围:0<=n<=100000
 * 考试成绩为整数,取值范围:0<=score<=300
 *
 * @输入描述
 * 员工的ID及考试分数
 *
 * @输出描述
 * 分差最小的员工ID对(p1,p2)列表,要求p1<p2。
 * 每一行代表一个集合,每个集合内的员工ID按顺序排列,多行结果也以员工对中p1值大小升序排列Q(如果p1相同则p2升序)。
 *
 * @示例1
 * 输入:
 * 5
 * 1 90
 * 2 91
 * 3 95
 * 4 96
 * 5 100
 * 输出:
 * 1 2
 * 3 4
 * 说明:
 * 输入: 第一行为员工个数n，后续的n行第一个数值为员工ID,第二个数值为员工考试分数
 * 输出: 员工1和员工2的分
 */

const demo = (employees) => {
  // 1. 先根据分数排序，如果分数相同则根据ID排序
  employees.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let minDiff = Infinity;
  const pairs = [];

  // 查找分差最小的ID对
  for (let i = 0; i < employees.length - 1; i++) {
    const [curId, curScore] = employees[i];
    const [nextId, nextScore] = employees[i + 1];

    // !! 这个很重要如果找到更小的，则清空数组
    if (nextScore - curScore < minDiff) {
      // !!清空数组
      pairs.length = 0;
      minDiff = diff;
      pairs.push([curId, nextId]);
    } else if (diff === minDiff) {
      pairs.push([curId, nextId]);
    }
  }

  // 按题目要求输出
  pairs.forEach((pair) => console.log(`${pair[0]} ${pair[1]}`));
};

console.log(
  demo([
    [1, 90],
    [2, 91],
    [3, 95],
    [4, 96],
    [5, 100],
  ])
);
