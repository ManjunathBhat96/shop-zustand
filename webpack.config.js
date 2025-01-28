const path = require("path");

const config = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        options: {
          presets: ["react"],
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [],
};

module.exports = config;
