function compare(src1, src2) {
  let arr1 = JSON.parse(JSON.stringify(src1));
  let arr2 = JSON.parse(JSON.stringify(src2));
  console.log();
  let searcher1 = {};
  let searcher2 = {};
  // 用arr组成索引
  arr1.forEach((ele, index) => {
    searcher1[ele.dingId] = index;
  });
  arr2.forEach((ele, index) => {
    searcher2[ele.dingId] = index;
  });

  // 过滤
  let samePart = arr2.filter(ele => {
    const result = searcher1[ele.dingId];
    return result == undefined ? false : true;
  });
  let onlySrc2 = arr2.filter(ele => {
    const result = searcher1[ele.dingId];
    return result == undefined ? true : false;
  });
  let onlySrc1 = arr1.filter(ele => {
    const result = searcher2[ele.dingId];
    return result == undefined ? true : false;
  });

  return {
    samePart,
    onlySrc1,
    onlySrc2
  };
}
