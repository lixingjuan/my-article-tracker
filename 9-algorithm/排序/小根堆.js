/** 实现一个小根堆 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // !! 获取索引为i的元素父元素
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(val) {
    // 把这个元素加入堆
    this.heap.push(val);
    // 对最新加入的元素上进上浮
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    // 1. 首先，获取要被上浮的元素的父元素
    let parentIndex = this.getParentIndex(index);
    // 2. 如果要被上浮的元素不为0（即不是堆的root） && 当前元素 < 他的父元素
    // 就一直进行交换
    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      // 交换后，下一个要处理的元素变成当前元素的父元素
      index = parentIndex;
      // 父元素变量，变为当前元素的父元素的父元素
      parentIndex = this.getParentIndex(index);
    }
  }
  sinkDown(index) {
    // 1. 首先初始化最小的元素是targetIndex
    let smallest = index;

    // 2. 分别找到他的左右子节点
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    // 3. 如果左子节点在堆内 && 左节点 < 最小的
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      // 4. 更新最小的
      smallest = leftChildIndex;
    }
    // 3. 如果右子节点在堆内 && 右节点 < 最小的
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }

    // 4. 如果index 不等于 最后算出来的最小元素，
    if (index !== smallest) {
      // 交换target 和 最小的位置
      this.swap(index, smallest);
      // 执行对计算出来的最小元素下沉
      this.sinkDown(smallest);
    }
  }
  extractMin() {
    if (!this.heap.length) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }
}

const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
minHeap.insert(0);

console.log(minHeap.heap);
