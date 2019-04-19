import * as rxjs from "rxjs";
import { map, filter, scan } from 'rxjs/operators';

// 1
let observable_publisher_source_$ = new rxjs.Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
})

// 一个观察者，处理器
let observer_$ = {
    next: (ele) => {
        console.log(ele)
    }
}

// map操作
let maped_observable_publisher_source_$ = observable_publisher_source_$.pipe(
    map((x: number) => x * x)
)


// 订阅，组装
maped_observable_publisher_source_$.subscribe(observer_$)

// 1
// let observable_publisher_source_$ = new rxjs.Observable((observer) => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
// })

// // 一个观察者，处理器
// let observer_$ = {
//     next: (ele) => {
//         console.log(ele)
//     }
// }

// // 订阅，组装
// observable_publisher_source_$.subscribe(observer_$)