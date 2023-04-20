class BannerWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tap("BannerWebpackPlugin", (compilation) => {
      const extensions = ["js", "css"];
      // 1. 获取即将输出的资源文件: compilation.assets
      // 2. 过滤只保留js和css资源
      const assets = Object.keys(compilation.assets).filter((path) => {
        const splitted = path.split(".");
        const ext = splitted[splitted.length - 1];
        return extensions.includes(ext);
      });
      const prefix = `/*
      * Author: ${this.options.author}
      */`;
      // 3. 遍历资源在顶部添加注释
      assets.forEach((asset) => {
        // 获取代码
        const source = compilation.assets[asset].source();
        // 拼接上注释
        const content = prefix + source;
        // 修改资源
        compilation.assets[asset] = {
          source() {
            return content;
          },
          size() {
            return content.length;
          },
        };
      });
    });
  }
}

module.exports = BannerWebpackPlugin;
