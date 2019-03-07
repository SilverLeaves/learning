const assert = require("power-assert");
const fun = require("../expand");

describe("转换测试", function() {
  describe("展开还原测试", function() {
    it("等价", function() {
      let src = [{ a: "1", b: "2" }, { a: "1", b: "2" }];

      let srcString = JSON.stringify(src);
      let recoverString = JSON.stringify(fun.recover(fun.expand(src))[""]);
      assert(srcString === recoverString);
    });
  });

  describe("展开还原测试", function() {
    it("等价", function() {
      let src = {
        label: "src",
        type: "array",
        children: [
          {
            label: "_listItem_",
            type: "object",
            children: [{ label: "a", type: "string" }]
          }
        ]
      };

      let srcString = JSON.stringify(src);
      let recoverString = JSON.stringify(fun.recover(fun.expand(src))[""]);
      assert(srcString === recoverString);
    });
  });

  describe("展开还原测试", function() {
    it("等价", function() {
      let src = [
        { src: ["src", "_listItem_", "a"], tar: ["tar", "_listItem_", "b"] }
      ];

      let srcString = JSON.stringify(src);
      let recoverString = JSON.stringify(fun.recover(fun.expand(src))[""]);
      assert(srcString === recoverString);
    });
  });
});
