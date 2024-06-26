/**
 * @题目描述
 * 某个产品当前迭代周期内有N个特性（F1, F2, ..., FN）需要进行覆盖测试，每个特性都被评估了对应的优先级，特性使用其ID作为下标进行标识。
 * 设计了M个测试用例（T1, T2,...,TM），每个用例对应了一个覆盖特性的集合，测试用例使用其ID作为下标进行标识，测试用例的优先级定义为其覆盖的特性的优先级之和。
 * 在开展测试之前，需要制定测试用例的执行顺序，规则为：优先级大的用例先执行，如果存在优先级相同的用例，用例ID小的先执行。
 *
 * @输入描述
 * 第一行输入为N和M，N表示特性的数量，M表示测试用例的数量。
 *
 * 之后N行表示特性ID=1到特性ID=N的优先级。
 *
 * 再接下来M行表示测试用例ID=1到测试用例ID=M关联的特性的ID的列表。
 *
 * @输出描述
 * 按照执行顺序（优先级从大到小）输出测试用例的ID，每行一个ID。
 *
 * @示例1
 * 输入
 * 5 4
 * 1
 * 1
 * 2
 * 3
 * 5
 * 1 2 3
 * 1 4
 * 3 4 5
 * 2 3 4
 *
 * @输出
 * 3
 * 4
 * 1
 * 2
 */

const demo = (priorityList, cases) => {
  // 特性的id和优先级映射干关系
  const featurePriorityMap = priorityList.reduce(
    (pre, cur, index) => pre.set(index + 1, cur),
    new Map()
  );

  const testCasePriorities = cases.map((testCase, index) => ({
    id: index + 1,
    priority: testCase.reduce((pre, cur) => pre + featurePriorityMap.get(cur), 0),
  }));

  return testCasePriorities
    .sort((a, b) => {
      if (a.priority === b.priority) {
        return a.id - b.id;
      }
      return b.priority - a.priority;
    })
    .map((it) => it.id);
};

console.log(
  demo(
    [1, 1, 2, 3, 5],
    [
      [1, 2, 3],
      [1, 4],
      [3, 4, 5],
      [2, 3, 4],
    ]
  )
);
