/**
 * @题目描述
 * 给定长度为 n 的无序的数字数组，每个数字代表二叉树的叶子节点的权值，数字数组的值均大于等于 1 。
 * 请完成一个函数，根据输入的数字数组，生成哈夫曼树，并将哈夫曼树按照中序遍历输出。
 * 为了保证输出的二叉树中序遍历结果统一，增加以下限制:
 *
 * 在树节点中，左节点权值小于等于右节点权值，根节点权值为左右节点权值之和。
 * 当左右节点权值相同时，左子树高度高度小于等于右子树。
 * 注意: 所有用例保证有效，并能生成哈夫曼树提醒:哈夫曼树又称最优二叉树，是一种带权路径长度最短的一叉树。
 *
 * 所谓树的带权路径长度，就是树中所有的叶结点的权值乘上其到根结点的路径长度(若根结点为 0 层，叶结点到根结点的路径长度为叶结点的层数)
 *
 * @输入描述
 * 例如：由叶子节点 5 15 40 30 10 生成的最优二叉树如下图所示，该树的最短带权路径长度为 40∗1+30∗2+15∗3+5∗4+10∗4=205。
 * 输出描述
 * 输出一个哈夫曼的中序遍历数组，数值间以空格分隔
 *
 * @示例1
 * 输入：
 * 5
 * 5 15 40 30 10
 *
 * 输出：
 * 40 100 30 60 15 30 5 15 10
 *
 * 说明：
 * 根据输入，生成哈夫曼树，按照中序遍历返回。所有节点中，左节点权值小于等于右节点权值之和。当左右节点权值相同时左子树高度小于右子树。结果如上图
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  push(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[index].val < this.heap[parentIndex].val) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    const size = this.heap.length;
    while (this.getLeftChildIndex(index) < size) {
      let childIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      if (rightChildIndex < size && this.heap[rightChildIndex].val < this.heap[childIndex].val) {
        childIndex = rightChildIndex;
      }
      if (this.heap[index].val > this.heap[childIndex].val) {
        this.swap(index, childIndex);
        index = childIndex;
      } else {
        break;
      }
    }
  }
}

const buildHuffmanTree = (nums) => {
  const minHeap = new MinHeap();
  // 将数字数组中的数字构建成节点，并加入最小堆
  nums.forEach((num) => {
    const node = new TreeNode(num);
    minHeap.push(node);
  });

  // 不断取出最小的两个节点，构建哈夫曼树
  while (minHeap.size() > 1) {
    const left = minHeap.pop();
    const right = minHeap.pop();
    const sum = left.val + right.val;
    const root = new TreeNode(sum);
    root.left = left;
    root.right = right;
    minHeap.push(root);
  }

  // 最后堆中剩下的唯一节点即为根节点
  return minHeap.pop();
};

const inOrderTraversal = (root, result) => {
  if (!root) return;

  inOrderTraversal(root.left, result);
  result.push(root.val);
  inOrderTraversal(root.right, result);
};

const generateHuffmanTree = (n, nums) => {
  const root = buildHuffmanTree(nums);
  const result = [];

  // 中序遍历输出哈夫曼树
  inOrderTraversal(root, result);

  return result;
};

const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// 示例调用
console.log(
  JSON.stringify(generateHuffmanTree(5, [5, 15, 40, 30, 10])) === `[40,100,30,60,15,30,5,15,10]`
);

// 辅助函数：对数组进行排序
const sortArray = (arr) => arr.sort((a, b) => a - b);

// 测试用例2
console.log(
  arraysEqual(
    sortArray(generateHuffmanTree(6, [1, 2, 3, 4, 5, 6])),
    sortArray([4, 10, 6, 21, 4, 14, 3, 7, 1, 6, 5, 2])
  )
);

// 测试用例3
console.log(
  arraysEqual(sortArray(generateHuffmanTree(3, [10, 20, 30])), sortArray([30, 80, 10, 50, 20]))
);

// 测试用例4
console.log(
  arraysEqual(
    sortArray(generateHuffmanTree(7, [7, 14, 21, 28, 35, 42, 49])),
    sortArray([49, 203, 21, 91, 14, 35, 7, 28, 42])
  )
);
