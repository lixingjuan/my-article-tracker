const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  plugins: [
    new HtmlWebpackPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader", 'postcss-loader']
        // 实现css模块化
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // ! 实现css模块化 为 css 类生成hash名
              modules: true
            }
          },
          'postcss-loader'
        ],
        exclude: [/node_modules/]
      }
    ]
  }
};
