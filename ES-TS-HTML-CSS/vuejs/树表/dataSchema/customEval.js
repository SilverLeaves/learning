/**
* @Author: zanlei
* @Date:
*/
'use strict'
// 展开成对象成数组，用来给table用
// 深度遍历过程中，为属性的每一个字段生成level
export default function showObjectTree (object, arry, level = 1) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key]
      // element.level=level
      let hasOwnproperties = false
      if (element.properties) {
        hasOwnproperties = true
      }
      arry.push({
        propertieName: key,
        node: element,
        parentNode: object,
        level,
        hasOwnproperties
      })
      if (element.properties) {
        // 这里不能使用level++或者++level。自增，会造成本层level变化。
        showObjectTree(element.properties, arry, level + 1)
      }
    }
  }
}
