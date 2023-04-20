const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 新增
const TestPlugin = require("./plugins/test-plugin");
const BannerWebpackPlugin = require("./plugins/BannerWebpackPlugin");
const AnalyzerWebpackPlugin = require("./plugins/AnalyzerWebpackPlugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    chunk2: "./src/chunk2.js",
  },
  output: {
    clean: true, // 在生成文件之前清空 output 目录
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]:[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        use: [path.resolve(__dirname, "./loaders/clean-log-loader")],
      },
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, "./loaders/banner-loader"),
          options: {
            author: "SMegalo",
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, "./loaders/babel-loader"),
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                  },
                  useBuiltIns: "usage", // 按需添加
                  corejs: "3.6.5",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|webp|git)$/,
        loader: path.resolve(__dirname, "./loaders/file-loader"),
      },
    ],
  },
  plugins: [
    // 提取css插件
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
    // new TestPlugin(), 测试
    new BannerWebpackPlugin({ author: "SMegalo" }),
    new AnalyzerWebpackPlugin(),
  ],
};
