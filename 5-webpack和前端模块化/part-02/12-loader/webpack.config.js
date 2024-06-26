const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",

  mode: "development",

  output: {
    filename: "build.js",

    path: path.resolve(__dirname, "build"),

    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],

    // 手动配置 loader 路径
  resolveLoader: {
    modules: [path.resolve(__dirname, 'loaders'), 'node_modules']
  },

  module: {
    rules: [
      {
        // 配置处理 css 的 loader
        test: /\.css$/,
        use: ['simple-style-loader', 'css-loader']
      },
      // {
      //   test: /\.js$/,
      //   // 直接指明 loader 的绝对路径
      //   use: path.resolve(__dirname, 'loaders/simple-loader')
      // },
    ]
  }
}