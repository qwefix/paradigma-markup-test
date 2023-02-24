const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "production",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
  },
  devServer: {
    static: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              autoprefixer({
                overrideBrowserslist:  ['last 2 versions'],
              }),
            ],
          },
          // plugins: [
          //   autoprefixer({
          //     browsers: ["ie >= 8", "last 4 version"],
          //   }),
          // ],
          sourceMap: true,
        },
      },
    ],
  },
};
