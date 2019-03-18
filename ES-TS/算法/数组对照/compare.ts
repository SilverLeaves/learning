export default function compare(src1, src2) {
  let arr1 = JSON.parse(JSON.stringify(src1));
  let arr2 = JSON.parse(JSON.stringify(src2));
  console.log();
  let searcher1 = new Map();
  let searcher2 = new Map();
  // 用arr组成索引
  arr1.forEach((ele, index) => {
    searcher1.set(ele.dingId, index);
  });
  arr2.forEach((ele, index) => {
    searcher2.set(ele.dingId, index);
  });

  // 过滤
  let samePart = arr2.filter(ele => {
    const result = searcher1.get(ele.dingId);
    return result == undefined ? false : true;
  });
  let onlySrc2 = arr2.filter(ele => {
    const result = searcher1.get(ele.dingId);
    return result == undefined ? true : false;
  });
  let onlySrc1 = arr1.filter(ele => {
    const result = searcher2.get(ele.dingId);
    return result == undefined ? true : false;
  });
  return {
    samePart,
    onlySrc1,
    onlySrc2
  };
}
