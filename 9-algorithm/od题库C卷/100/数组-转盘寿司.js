/**
 * @题目描述
 * 寿司店周年庆，正在举办优惠活动回馈新老客户。
 * 寿司转盘上总共有 n 盘寿司，prices[i] 是第i盘寿司的价格
 * 如果客户选择了第i盘寿司，寿司店免费赠送客户距离第i盘寿词最近的下一盘寿司j，前提是 prices[j]< prices[i]，如果没有满足条件的j则不赠送寿司。
 * 每个价格的寿司都可无限供应。
 *
 * @输入描述
 * 输入的每一个数字代表每盘寿司的价格，每盘寿司的价格之间使用空格进行分隔
 * 3 15 6 14
 * 表示:
 * · 第 0 盘寿司价格 prices[0]为 3
 * · 第 1 盘寿司价格 prices[1]为 15
 * · 第 2 盘寿司价格 prices[2]为 6
 * · 第 3 盘寿司价格 prices[3]为 14
 *
 * 寿司的盘数n范围为:1≤n≤500
 * 每盘寿司的价格 price 范围为:1≤price≤1000
 *
 * @输出描述
 * 输出享受优惠后的一组数据，每个值表示客户选择第i盘寿司时实际得到的寿司的总价格。使用空格进行分隔，例如:
 * 3 21 9 17
 */

function findDiscountedPrices(prices) {
  // 用于存储最终的结果
  let result = [];
  const priceLen = prices.length;

  /** 查找价格低于当前寿司且最接近的寿司 */
  const getNextLowPrice = (curIndex) => {
    const currentPrice = prices[curIndex];

    // !! 重点：开始和结束的条件：从当前位置开始找，到当前前一盘结束
    for (let diff = 1; diff < prices.length; diff++) {
      const realIndex = (curIndex + diff) % priceLen;

      const beComparedPrice = prices[realIndex];

      if (beComparedPrice < currentPrice) {
        // 如果找到比当前便宜的寿司，则返回两盘寿司的综合
        return currentPrice + beComparedPrice;
      }
    }

    return prices[curIndex];
  };

  // 遍历每盘寿司
  for (let i = 0; i < prices.length; i++) {
    result.push(getNextLowPrice(i));
  }

  return result;
}

console.log(findDiscountedPrices([1, 2, 3, 4]).join(" "));

// 测试用例 1: 基本情况
console.log(findDiscountedPrices([3, 15, 6, 14]).join(" ") === "3 21 9 17");

// 测试用例 2: 没有任何优惠的情况
console.log(findDiscountedPrices([5, 5, 5, 5]).join(" ") === "5 5 5 5");

// 测试用例 3: 所有盘都能享受优惠
console.log(findDiscountedPrices([10, 9, 8, 7, 6]).join(" ") === "19 17 15 13 6");

// 测试用例 4: 第一盘寿司是最便宜的
console.log(findDiscountedPrices([1, 20, 30, 40]).join(" ") === "1 21 31 41");

// 测试用例 5: 最后一盘寿司是最便宜的
console.log(findDiscountedPrices([20, 30, 40, 1]).join(" ") === "21 31 41 1");

// 测试用例 6: 仅有一盘寿司
console.log(findDiscountedPrices([100]).join(" ") === "100");

// 测试用例 7: 寿司价格递增
console.log(findDiscountedPrices([1, 2, 3, 4, 5]).join(" ") === "1 3 4 5 6");
