/**
 * @jest-environment node
 */
import compiler from "./compiler.js";

test("ES2015+语法转成适用于当前浏览器的代码", async () => {
  const stats = await compiler("demo.js", {
    presets: ["@babel/preset-env"],
  });
  const output = stats.toJson({ source: true }).modules[0].source;

  expect(output.replace(/\r|\n|\s/g, "")).toBe(
    '"usestrict";functionfilter(){returnadd(1,3);}varb=filter();[1,2,3].map(function(n){returnn+1;});'
  );
});
