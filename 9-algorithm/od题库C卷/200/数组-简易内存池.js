/**
 * @题目描述
 * 请实现一个简易内存池,根据请求命令完成内存分配和释放。
 * 内存池支持两种操作命令，REQUEST和RELEASE，其格式为：
 * 1、REQUEST
 * 请求的内存大小表示请求分配指定大小内存，如果分配成功，返回分配到的内存首地址；
 * 如果内存不足，或指定的大小为0，则输出error。
 * 2、RELEASE
 * 释放的内存首地址 表示释放掉之前分配的内存，释放成功无需输出，如果释放不存在的首地址则输出error。
 *
 * 注意：
 *  1.内存池总大小为100字节。
 *  2.内存池地址分配必须是连续内存，并优先从低地址分配。
 *  3.内存释放后可被再次分配，已释放的内存在空闲时不能被二次释放。
 *  4.不会释放已申请的内存块的中间地址。
 *  5.释放操作只是针对首地址所对应的单个内存块进行操作，不会影响其它内存块。
 *
 * @输入描述
 * 首行为整数N，表示操作命令的个数。
 * 接下来的N行，每行将给出一个操作命令，操作命令和参数之间用“=”分割
 *
 * @输出描述
 * 输出最后请求的内存的首地址。
 * 如果位置已满，则输出-1。
 *
 * @示例
 * 2
 * REQUEST=10
 * REQUEST=20
 *
 * 输出样例：
 * 0
 * 10
 *
 * @示例2
 * 5
 * REQUEST=10
 * REQUEST=20
 * RELEASE=0
 * REQUEST=20
 * REQUEST=10
 *
 * 输出
 * 0
 * 30
 * 10
 * 0
 * 说明
 * 第一条指令，申请地址0~9的10个字节内存，返回首地址0
 * 第二条指令，申请地址10-29的20字节内存，返回首地址10
 * 第三条指令，释放首地址为0的内存申请，0~9地址内存被释放，变为空闲，释放成功，无需输出
 * 第四条指令，申请20字节内存，09地址内存连续空间不足20字节，往后查找到30-49地址，返回首地址30
 * 第五条指令，申请10字节，0~9地址内存空间足够，返回首地址0
 */

class SimpleMemoryPool {
  constructor(size) {
    this.totalSize = size;
    this.allocated = []; // { start: Number, size: Number }
  }

  request(size) {
    if (size <= 0 || size > this.totalSize) {
      console.log("error");
      return;
    }

    // 尝试找到足够的连续空间
    let start = 0;
    for (let block of this.allocated) {
      if (block.start - start >= size) {
        // 找到足够的空间
        this.allocated.push({ start: start, size: size });
        this.allocated.sort((a, b) => a.start - b.start); // 保持排序
        console.log(start);
        return;
      }
      start = block.start + block.size;
    }

    // 检查最后一块后面是否有足够空间
    if (this.totalSize - start >= size) {
      this.allocated.push({ start: start, size: size });
      console.log(start);
    } else {
      console.log("error");
    }
  }

  release(startAddress) {
    const index = this.allocated.findIndex((block) => block.start === startAddress);
    if (index === -1) {
      console.log("error");
      return;
    }
    this.allocated.splice(index, 1); // 释放内存块
  }
}

// 解析命令和参数
function handleCommands(commands) {
  const memoryPool = new SimpleMemoryPool(100); // 初始化一个100字节的内存池
  for (let command of commands) {
    const [operation, value] = command.split("=");
    if (operation === "REQUEST") {
      memoryPool.request(parseInt(value));
    } else if (operation === "RELEASE") {
      memoryPool.release(parseInt(value));
    }
  }
}

console.log(handleCommands(["REQUEST=10", "REQUEST=20", "RELEASE=0", "REQUEST=20", "REQUEST=10"]));
