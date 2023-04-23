const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: 9000,
    open: true,
  },
});
