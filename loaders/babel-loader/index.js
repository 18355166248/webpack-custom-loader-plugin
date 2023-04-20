const babel = require("@babel/core");
const schemaJson = require("./scheme.json");

module.exports = function (content, map, meta) {
  const options = this.getOptions(schemaJson);
  const callback = this.async();

  babel.transform(content, options, function (err, result) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result.code, map, meta);
  });
};
