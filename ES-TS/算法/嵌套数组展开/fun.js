// 展开
function array_expand(array, path = [], list = []) {
  array.forEach(element => {
    if (element.properties) {
      if (element.properties.length > 0) {
        array_expand(
          element.properties,
          path.concat({ propName: element.propName, type: element.type }),
          list
        );
      } else {
        list.push(
          path.concat({ propName: element.propName, type: element.type })
        );
      }
    } else {
      list.push(
        path.concat({ propName: element.propName, type: element.type })
      );
    }
  });
  return list;
}

// 过滤
function array_filter(array) {
  let list = [];
  array.forEach(element => {
    let result = element.some(ele => {
      return ele.type == "array";
    });
    if (result) {
      list.push(element);
    }
  });
  return list;
}

// 修剪
function array_clip(array) {
  let list = JSON.parse(JSON.stringify(array));
  list.forEach(element => {
    for (let index = element.length - 1; index >= 0; index--) {
      let ele = element[index];
      if (ele.type != "array") {
        element.splice(index, 1);
      } else {
        break;
      }
    }
  });
  return list;
}

function array_option(array) {
  let list = [];
  array.forEach(element => {
    let value = Array.from(element, ele => {
      return ele.propName;
    });
    list.push({ label: value.join("/"), value });
  });

  return list;
}

module.exports = function(array) {
  return array_option(array_clip(array_filter(array_expand(array))));
};
