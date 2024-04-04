/**
 * @题目描述
 * 在一款虚拟游戏中生活，你必须进行投资以增强在虚拟游戏中的资产以免被淘汰出局。
 * 现有一家 Bank，它提供有若干理财产品 m，风险及投资回报不同，你有 N（元）进行投资，能接受的总风险值为 X。
 * 你要在可接受范围内选择最优的投资方式获得最大回报。
 *
 * 说明：
 * 1、在虚拟游戏中，每项投资风险值相加为总风险值；
 * 2、在虚拟游戏中，最多只能投资 2 个理财产品；
 * 3、在虚拟游戏中，最小单位为整数，不能拆分为小数；
 *
 * 投资额*回报率=投资回报
 *
 * @输入描述
 * 第一行：产品数(取值范围[1, 20])，总投资额(整数，取值范围[1, 10000])，可接受的总风险(整数，取值范围[1, 200])
 * 第二行：产品投资回报率序列，输入为整数，取值范围[1,60]
 * 第三行：产品风险值序列，输入为整数，取值范围[1,100]
 * 第四行：最大投资额度序列，输入为整数，取值范围[1,10000]
 *
 * @输出描述
 * 每个产品的投资额序列
 *
 * @补充说明
 * 1、在虚拟游戏中，每项投资风险值相加为总风险值；
 * 2、在虚拟游戏中，最多只能投资 2 个理财产品；
 * 3、在虚拟游戏中，最小单位为整数，不能拆分为小数；
 *
 *
 * @示例
 * 输入
 * 5 100 10  // 产品数 总投资额 可接受的总风险
 * 10 20 30 40 50 // 产品投资回报率序列
 * 3 4 5 6 10 // 产品风险值序列
 * 20 30 20 40 30 // 最大投资额度序列
 * 输出
 * 0 30 0 40 0
 */

/**
 * @解题思路
 * 在满足总风险不超过容忍度和总投资额不超过预算的前提下，通过遍历选择单个或两个理财产品的组合来最大化投资回报。
 * 伪代码如下:
 * 1.初始化最大回报值为0.
 * 2.遍历所有理财产品:
 *   a.如果单个产品的风险值和投资额均不超过限制，考虑其回报值,
 *   b.更新最大回报值。
 * 3.再次遍历所有理财产品组合(两两配对):
 *   a.如果两个产品的风险值之和和投资额之和均不超过限制，考虑这两个产品的回报值之和。
 *   b.更新最大回报值。
 * 4.返回最大回报值。
 */
function maxInvestmentReturn(
  /** 产品数量 */
  productNum,
  /** 总投资额 */
  totalInvestment,
  /** 可接受的总风险 */
  acceptableRisk,
  /** 产品投资回报率序列 */
  returns,
  /** 产品风险值序列 */
  risks,
  /** // 最大投资额度序列 */
  maxInvestments
) {
  // 最大回报
  let maxReturn = 0;
  // 初始化投资额 序列为0
  let bestInvestment = Array.from({ length: productNum }, () => 0);

  // 遍历所有可能的产品组合
  for (let i = 0; i < productNum; i++) {
    for (let j = i; j < productNum; j++) {
      // 对于每种组合，尝试所有可能的投资额分配
      for (let investI = 1; investI <= Math.min(totalInvestment, maxInvestments[i]); investI++) {
        // 剩余可用投资额
        let remainingInvestment = totalInvestment - investI;
        let investJ = j === i ? 0 : Math.min(remainingInvestment, maxInvestments[j]);

        let currentRisk = risks[i] * (investI !== 0) + risks[j] * (investJ !== 0);
        let currentReturn = returns[i] * investI + returns[j] * investJ;

        // 检查当前组合是否满足风险限制并且回报是否最大
        if (currentRisk <= acceptableRisk && currentReturn > maxReturn) {
          maxReturn = currentReturn;
          // 更新最优投资方案
          bestInvestment.fill(0); // 重置投资额序列
          bestInvestment[i] = investI;
          if (j !== i) bestInvestment[j] = investJ;
        }
      }
    }
  }

  // 如果没有合法投资方案，返回0；否则返回最优投资方案
  if (maxReturn === 0) return "0";
  return bestInvestment.join(" ");
}

// 示例输入
let productNum = 5;
let totalInvestment = 100;
let acceptableRisk = 10;
let returns = [10, 20, 30, 40, 50];
let risks = [3, 4, 5, 6, 10];
let maxInvestments = [20, 30, 20, 40, 30];

// 示例调用
console.log(
  maxInvestmentReturn(productNum, totalInvestment, acceptableRisk, returns, risks, maxInvestments)
);
