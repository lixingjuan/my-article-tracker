/** 常用来处理一些不相交集合的合并和查找问题 */
class DynamicUnionFind {
  constructor() {
    // 使用 Map 来动态存储元素及其根元素
    this.root = new Map();
  }

  // 确定元素属于哪个集合。这通常涉及找到该元素的“根”元素，根元素代表了整个集合
  find(x) {
    if (!this.root.has(x)) {
      this.root.set(x, x); // 如果元素 x 不存在，则添加 x，并且它的根是它自己
      return x;
    }

    if (this.root.get(x) === x) {
      return x;
    }

    // 路径压缩
    this.root.set(x, this.find(this.root.get(x)));
    return this.root.get(x);
  }

  // 合并元素 x 和元素 y 所在的集合
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.root.set(rootX, rootY);
    }
  }

  // 检查元素 x 和元素 y 是否属于同一集合
  connected(x, y) {
    const targetX = this.find(x);
    const targetY = this.find(y);
    console.log({ targetX, targetY });
    return targetX === targetY;
  }
}

// 使用示例
const dynamicUF = new DynamicUnionFind();
dynamicUF.union("1", "2"); // 合并元素 1 和元素 2
console.log(dynamicUF);
// console.log(dynamicUF.connected("1", "2")); // true
dynamicUF.union("2", "3"); // 合并元素 2 和元素 3
console.log(dynamicUF);
console.log(dynamicUF.connected("3", "1")); // true
