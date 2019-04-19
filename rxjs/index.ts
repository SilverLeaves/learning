import * as rxjs from "rxjs";
import axios, { AxiosResponse } from "axios";
import { tap, catchError, retry, retryWhen, finalize } from "rxjs/operators";

interface res {
    data: any[];
    count: number;
}

// 做一个诺言
let promiseSource$ = rxjs.from(
    axios.get<res>("http://govapi.pinza.com.cn/newsList")
);

// 可以在catchError中干一些副业，比如说提示之类
let dealedPromiseSource$ = promiseSource$.pipe(
    catchError((error, caught$) => {
        return rxjs.of({ data: { count: 0 } });
    }),
    // 不影响数据流
    tap(thing => {

    }),
    // 不影响数据流
    finalize(() => { console.log("finay") })
);

// 主要是做全局变量处理
let subscription = dealedPromiseSource$.subscribe(res => {
    let response = <AxiosResponse<res>>(res as any);
    console.log(response.data.count);
});
