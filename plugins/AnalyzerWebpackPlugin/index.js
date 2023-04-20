class AnalyzerWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("AnalyzerWebpackPlugin", (compilation) => {
      const assets = Object.entries(compilation.assets);
      debugger;
      let source = "# 分析打包资源大小 \n\n| 名称 | 大小 |\n| --- | ---|";
      assets.forEach(([fileName, file]) => {
        source += `\n| ${fileName} | ${file.size()} |`;
      });

      compilation.assets["analyzer.md"] = {
        source() {
          return source;
        },
        size() {
          return source.length;
        },
      };
    });
  }
}

module.exports = AnalyzerWebpackPlugin;
