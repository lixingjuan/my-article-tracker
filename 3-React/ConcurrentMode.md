
# ConcurrentMode是什么？解决了什么问题？

## Concurrent Mode是什么？

Concurrent Mode是React 18中的一种新的渲染模式，可以更好地支持高优先级、交互式UI。

## 解决了什么问题？

在传统的渲染模式下，当应用程序需要执行耗时操作时（例如大量计算或长时间请求），会阻塞主线程，导致UI变得不响应。
这意味着用户无法与应用程序进行交互，并且可能会影响性能。
随着Concurrent Mode的引入，React可以将工作分成小块，并在每个块之间让出时间片。
这使得浏览器可以在空闲期间继续处理其他任务，并保持对用户输入和动画等事件的响应。

## 实现方式
使用ConcurrentMode需要使用一些新概念和API。例如：
- `ReactDOM.createRoot()`方法：创建一个根对象以启用ConcurrentMode。
- `Suspense`组件：允许您暂停正在加载数据或代码拆分组件并显示一个占位符直到它们准备好呈现为止。
- `useTransition` Hook：允许您控制异步更新期间状态转换之间发生的事情。