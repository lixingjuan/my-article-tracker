const path = require("path");

module.exports = {
  mode: "production",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    clean: true,
   },


  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          },
          // {
          //   loader: "thread-loader",
          //   options: {
          //     workers: 2
          //   }
          // }
        ]
      },
    ]
  }
};
