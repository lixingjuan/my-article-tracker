/**
 * @key 限定交易次数k
 * 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 *
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

/**
 * 状态转移方程
 *
 * dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
 * dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
 *
 * for (let i = 0; i < n; i++) {
 *  for (let k = maxK; k >= 1; k--) {
 *    dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
 *    dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
 *  }
 * }

 */

/**
 * dp[0]: sell,
 * dp[1]: buy,
 *
 */
function maxProfit(k, prices) {
  const len = prices.length;
  if (len <= 1) return 0;

  let dp = Array.from({ length: prices.length }, () => ({
    sell: 0, // 表示没有股票
    buy: -prices[0], // 表示有股票
  }));

  for (let i = 0; i < len; i++) {
    for (let j = 1; j <= k; j++) {
      dp[j] = {
        sell: Math.max(dp[j].sell, dp[j].buy + prices[i]),
        buy: Math.max(dp[j].buy, dp[j - 1].sell - prices[i]),
      };
    }
  }

  return dp[k].sell;
}

console.log(maxProfit(2, []) === 0);
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]) === 7);
