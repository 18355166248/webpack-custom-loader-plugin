const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 新增
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TestPlugin = require("./plugins/test-plugin");
const BannerWebpackPlugin = require("./plugins/BannerWebpackPlugin");
const AnalyzerWebpackPlugin = require("./plugins/AnalyzerWebpackPlugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    chunk2: "./src/chunk2.js",
    chunk3: "./src/chunk3.js",
  },
  output: {
    clean: true, // 在生成文件之前清空 output 目录
    path: path.resolve(__dirname, "dist"),
    filename: "[name]:[chunkhash].js",
    // 影响按需加载的 chunk 文件
    chunkFilename: "chunk-[name]:[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        use: [path.resolve(__dirname, "./loaders/clean-log-loader")],
      },
      // banner-loader 无效
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: path.resolve(__dirname, "./loaders/banner-loader"),
      //     options: {
      //       author: "SMegalo----",
      //     },
      //   },
      // },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: path.resolve(__dirname, "./loaders/babel-loader"),
      //     options: {
      //       presets: [
      //         [
      //           "@babel/preset-env",
      //           {
      //             targets: {
      //               edge: "17",
      //               firefox: "60",
      //               chrome: "67",
      //               safari: "11.1",
      //             },
      //             useBuiltIns: "usage", // 按需添加
      //             corejs: "3.6.5",
      //           },
      //         ],
      //       ],
      //     },
      //   },
      // },
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
      // 影响按需加载的 chunk 文件
      chunkFilename: "chunk-[id]-[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "测试 webapck",
      // filename: "public/index.html",
    }),
    // new TestPlugin(), 测试
    new BannerWebpackPlugin({ author: "SMegalo6666" }),
    new AnalyzerWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "chunk2-main",
          type: "css/mini-extract",
          chunks: (chunk) => {
            return chunk.name === "chunk2";
          },
          enforce: true,
        },
      },
    },
  },
};
