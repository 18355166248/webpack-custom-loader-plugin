const { validate } = require("schema-utils");
const schemeJson = require("./scheme.json");

module.exports = function (content) {
  const options = this.getOptions();
  validate(schemeJson, options, {
    name: "banner-loader",
    baseDataPath: "options",
  });
  const prefix = `
  /*
  * Author: ${options.author}
  */
  `;
  return prefix + content;
};
