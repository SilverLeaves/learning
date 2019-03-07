let data = [
  {
    propName: "一级 1",
    type: "1",
    properties: [
      {
        propName: "二级 1-1",
        type: "1",
        properties: [
          {
            propName: "三级 1-1-1",
            type: "1"
          }
        ]
      }
    ]
  },
  {
    propName: "一级 2",
    type: "array",
    properties: [
      {
        propName: "二级 2-1",
        type: "1",
        properties: [
          {
            type: "1",
            propName: "三级 2-1-1"
          }
        ]
      },
      {
        type: "1",
        propName: "二级 2-2",
        properties: [
          {
            type: "array",
            propName: "三级 2-2-1"
          }
        ]
      }
    ]
  },
  {
    type: "1",
    propName: "一级 3",
    properties: [
      {
        type: "array",
        propName: "二级 3-1",
        properties: [
          {
            type: "1",
            propName: "三级 3-1-1"
          }
        ]
      },
      {
        type: "1",
        propName: "二级 3-2",
        properties: [
          {
            type: "1",
            propName: "三级 3-2-1"
          }
        ]
      }
    ]
  }
];

const fun = require("./fun");

console.log(fun(data));
