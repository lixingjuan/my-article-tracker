const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./app.js",

  // output: {
  //   clean: true,
  // },

  devServer: {
    // 热替换, 比如已经在页面操作了dom后，去代码中修改了颜色/value等，则操作的dom仍保持原样，只会替换修改的对应属性
    // 若 output.clean存在则无效
    hot: true,
    // 热加载，修改了代码，浏览器自动加载最新编译后的文件
    liveReload: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./app.html",
    }),
  ],
};
