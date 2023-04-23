const path = require("path");

module.exports = {
  mode: "production",
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
        use: ["css-loader"],
      },
      {
        test: /\.(png|jpe?g|webp|git)$/,
        loader: path.resolve(__dirname, "./loaders/file-loader"),
      },
    ],
  },
};
