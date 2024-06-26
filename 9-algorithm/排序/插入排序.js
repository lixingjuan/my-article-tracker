/**
 * 思路：
 * 类似于扑克牌排序
 */

/** 插入排序 */
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // 把current插入到对应位置
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([3, 2, 1]));
