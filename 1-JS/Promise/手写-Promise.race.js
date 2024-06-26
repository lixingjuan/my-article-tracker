class MyPromise {
  static race(fns) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(fns)) {
        return reject(new TypeError("arguments must be array"));
      }

      // const promises = fns.map((it) => Promise.resolve(it));
      fns.forEach((fn) => {
        Promise.resolve(fn).then(resolve, reject);
        // 不使用 `Promise.resolve(fn).then(resolve).catch(reject);` 是因为，
        // then(resolve, reject)只处理原始Promise的错误，而.catch, .then中的错误也会进入catch
      });
    });
  }
}

Promise.race([Promise.reject(1)]).then(
  (res) => {
    console.log("success", res);
  },
  (err) => {
    console.log("error", err);
  }
);
