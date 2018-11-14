# 笔记

## 需要的结果

``` json
{
    "data":{
        type:[Object,Array,Number,String]
    },
    "statusKey":"keyOfNextStatus"
}
```

## 返回值类型

eval(`${script}`)返回的可能是同步函数，页可能是异步函数，也可能是promise，也可能是一个数值，也可能无返回。

## 上下文