const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: 9000,
    open: true,
  },
  optimization: {
    minimizer: [
      //  压缩 css 文件
      new CssMinimizerPlugin(),
    ],
  },
});
