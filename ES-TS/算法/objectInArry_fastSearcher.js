// 他山之石，可以攻玉

// 任务在数组中的对象唯一键的快速查找
// 具有独立索引的
var arr1 = [{
    name: "aa",
    sex: "male"
}, {
    name: "bb",
    sex: "male"
}, {
    name: "cc",
    sex: "female"
}, {
    name: "dd",
    sex: "female"
}];

// 利用js对象构造哈希表，然后利用这个哈希表来查找
// 计算量为n+S
let arr2 = {}
arr1.forEach((ele, index) => {
    arr2[ele.name] = index;
})

// 想法验证
console.log("想法验证查找测试：");
console.log(arr1[arr2["cc"]]);
console.log(arr1[arr2["dd"]]);
console.log(arr1[arr2["bb"]]);
console.log(arr1[arr2["aa"]]);

console.log("封装后查找测试：");
// 封装成函数searcher
let searcher = (Arr1, ArrS, name, fun) => {
    let Arr2 = {};
    Arr1.forEach((ele, index) => {
        Arr2[ele[name]] = index;
    });
    ArrS.forEach((ele) => {
        fun(Arr1[Arr2[ele]]);
    });
}

// 测试
arrS = ["aa", "dd"];
searcher(arr1, arrS, "name", (ele) => {
    ele.human=true;
    console.log(ele);
});
