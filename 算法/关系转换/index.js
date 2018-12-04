const fun = require("./expand");

let src = [{ a: "1", b: "2" }, { a: "1", b: "2" }];
console.log("元数据");
console.log(src);

console.log("展开");
console.log(fun.expand(src));
console.log("还原");
console.log(fun.recover(fun.expand(src)));

function generateRelation(expanded) {
  let releation = [];

  expanded.forEach(element => {
    element;
  });
}
// 源对象和目标对象的根的名字并不重要
// let src = [{ a: "1" }, { a: "2" }];

// let schame_src = [
//   {
//     label: "src",
//     type: "array",
//     children: [
//       {
//         label: "_listItem_",
//         type: "object",
//         children: [
//           {
//             label: "a",
//             type: "string"
//           }
//         ]
//       }
//     ]
//   }
// ];

// let schame_tar = [
//   {
//     label: "src",
//     type: "array",
//     children: [
//       {
//         label: "_listItem_",
//         type: "object",
//         children: [
//           {
//             label: "a",
//             type: "string"
//           }
//         ]
//       }
//     ]
//   }
// ];

// let releation = [
//   {
//     src: ["src", "_listItem_", "a"],
//     tar: ["tar", "_listItem_", "b"]
//   }
// ];
