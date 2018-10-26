// 他山之石，可以攻玉

// 任务在数组中满足条件的多对象的快速查找
// 具有独立索引的
var arr1 = [{
    name: "aa",
    sex: "male"
}, {
    name: "bb",
    sex: "female"
}, {
    name: "cc",
    sex: "male"
}, {
    name: "dd",
    sex: "female"
}]

// 利用js对象构造哈希表，然后利用这个哈希表来查找
// 计算量为n+xS？
// 操作量为2n+s+xS？
let arr2 = {}
arr1.forEach((ele, index) => {
    if (!arr2[ele.sex]) {
        arr2[ele.sex]=[];
    }
    arr2[ele.sex].push(index);
})

// 想法验证
console.log("想法验证查找测试：");
arr2["male"].forEach((ele)=>{
    arr1[ele].exist=true;
    console.log(arr1[ele]);
})

arr2["female"].forEach((ele)=>{
    arr1[ele].exist=false;
    console.log(arr1[ele]);
})

console.log("封装后查找测试：");
// 封装成函数searcher
let searcher = (Arr1, ArrS, name, fun) => {
    let Arr2 = {}
    Arr1.forEach((ele, index) => {
        if (!Arr2[ele[name]]) {
            Arr2[ele[name]]=[];
        }
        Arr2[ele[name]].push(index);
    })

    ArrS.forEach((ele) => {
        Arr2[ele].forEach((ele)=>{
            fun(arr1[ele])
        })
    })
}

console.log("唯一键查找测试");
// 测试1
arrS = ["aa", "dd"]
searcher(arr1, arrS, "name", (ele) => {
    ele.human=true
    console.log(ele);
})
console.log("多条数据查找测试");
// 测试2
arrS = ["male", "female"]
searcher(arr1, arrS, "sex", (ele) => {
    ele.human=true
    console.log(ele);
})
