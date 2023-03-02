const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./js.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
