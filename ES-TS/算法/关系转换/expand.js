// 分析类型
function getType(data) {
  let type = typeof data;

  if (type === "object") {
    if (Array.isArray(data)) {
      type = "array";
    } else {
      type = "object";
    }
  }
  return type;
}

// 展开
function expand(data, key = "") {
  let list = [];

  function _expand(key, data, path = []) {
    let type = getType(data);
    switch (type) {
      case "number":
      case "boolean":
      case "string":
        list.push({
          value: data,
          path: path.concat({ key, type })
        });
        break;
      case "object":
        Object.keys(data).forEach(key_ele => {
          _expand(key_ele, data[key_ele], path.concat({ key, type }));
        });
        break;
      case "array":
        data.forEach((element, index) => {
          _expand(index, element, path.concat({ key, type }));
        });
        break;
      default:
        console.error(type);
    }
  }

  _expand(key, data);
  return list;
}

// 获取每个路径中数组的深度
function arrayDeep(data) {
  data.forEach(element => {
    let deep = 0;
    element.path.forEach(ele => {
      if (ele.type == "array") {
        deep++;
      }
    });
    element.arrayDeep = deep;
  });
}

// 恢复
function recover(data) {
  let result = {};
  data.forEach(element => {
    let path = result;
    element.path.forEach((ele, index) => {
      // 若路径不存在,则给予路径
      if (!path[ele.key]) {
        switch (ele.type) {
          case "number":
          case "boolean":
          case "string":
            path[ele.key] = element.value;
            break;
          case "object":
            path[ele.key] = {};
            break;
          case "array":
            path[ele.key] = [];
            break;
          default:
            console.error(ele);
        }
      }
      path = path[ele.key];
    });
  });

  return result;
}

module.exports = {
  expand,
  recover
};

// 测试
// let src = [{ a: "1", b: "2" }, { a: "1", b: "2" }];
// console.log("元数据");
// console.log(src);

// console.log("展开");
// console.log(expand(src));
// console.log("还原");
// console.log(recover(expand(src)));
