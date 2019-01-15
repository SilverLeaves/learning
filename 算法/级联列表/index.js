let data = {
  roleForPicker: [],
  value: [],
  role: [
    {
      name: "1",
      chrildren: [
        {
          name: "1-1",
          chrildren: [{ name: "1-1-1" }, { name: "1-1-2" }, { name: "1-1-3" }]
        },
        {
          name: "1-2",
          chrildren: [{ name: "1-2-1" }, { name: "1-2-2" }, { name: "1-2-3" }]
        }
      ]
    },
    {
      name: "2",
      chrildren: [
        {
          name: "2-1",
          chrildren: [{ name: "2-1-1" }, { name: "2-1-2" }, { name: "2-1-3" }]
        },
        {
          name: "2-2",
          chrildren: [{ name: "2-2-1" }, { name: "2-2-2" }, { name: "2-2-3" }]
        }
      ]
    },
    {
      name: "3",
      chrildren: [
        {
          name: "3-1",
          chrildren: [{ name: "3-1-1" }, { name: "3-1-2" }, { name: "3-1-3" }]
        },
        {
          name: "3-2",
          chrildren: [{ name: "3-2-1" }, { name: "3-2-2" }, { name: "3-2-3" }]
        }
      ]
    }
  ]
};

function onChange(detail) {
  let list = [];
  let currentNode = data.role;
  //   先加载第一层
  list.push(
    Array.from(currentNode, ele => {
      return ele.name;
    })
  );
  // 加载子层数,有多长,尝试加载多少层
  for (let index = 0; index < detail.length; index++) {
    // 若没有子节点了,就退出
    if (currentNode[detail[index]].chrildren) {
      list.push(
        Array.from(currentNode[detail[index]].chrildren, ele => {
          return ele.name;
        })
      );
      currentNode = currentNode[detail[index]].chrildren;
    } else {
      break;
    }
  }
  data.roleForPicker = list;
}

onChange([]);
console.log(data.roleForPicker);
onChange([1]);

console.log(data.roleForPicker);
onChange([1, 0]);
console.log(data.roleForPicker);
onChange([1, 0, 1]);
console.log(data.roleForPicker);
onChange([1, 1, 0]);
console.log(data.roleForPicker);
