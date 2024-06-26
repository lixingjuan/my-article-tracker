const path = require("path");

module.exports = {
  mode: "production",

  entry: "./src/index.js",

  // experiments: {
  //   outputModule: true
  // },

  output: {
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    filename: "myLib.js",
    /* !! 配置了该属性，就不会被treeShaking */
    library: {
      name: 'myLib',
      type: "umd"
    },
    /* !! globalThis 代替 全局self */
    globalObject: "globalThis"
   },
};
