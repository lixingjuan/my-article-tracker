const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    clean: true,
   },

  plugins: [
    new HtmlWebpackPlugin(),

    new ModuleFederationPlugin({
      name: 'search',
      filename: 'remoteEntry.js',
      remotes: {
        home: "home@http://localhost:3001/remoteEntry.js",
        nav: "nav@http://localhost:3002/remoteEntry.js",
      },
    })
  ],
};
