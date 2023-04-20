const { interpolateName } = require("loader-utils");

module.exports = function (content) {
  const fileHashName = interpolateName(this, "images/[hash].[ext][query]", {
    content,
  });
  // 将资源输出到文件夹中
  this.emitFile(fileHashName, content);
  return `module.exports = "${fileHashName}"`;
};

module.exports.raw = true; // 保证上面的 content为 buffer 数据
