import * as rxjs from "rxjs";

// 1
// // 创建一个可被观测的对象，或者说publisher,或者说数据源。
// let observable_publisher_source_$ = rxjs.of(1, 2, 3);

// // 一个观察者，处理器
// let observer_$ = {
//     next: (ele) => {
//         console.log(ele)
//     }
// }

// // 订阅，组装
// observable_publisher_source_$.subscribe(observer_$)

// 2
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

// 3
// let observable_publisher_source_$ = new rxjs.Observable(observer => {

//     let number = 1;

//     const handle = setInterval(() => {
//         observer.next(number++);
//         if (number > 3) {
//             clearInterval(handle);
//         }
//     }, 1000);

// });

// // 一个观察者，处理器
// let observer_$ = {
//     next: ele => {
//         console.log(ele);
//     }
// };

// // 订阅，组装
// observable_publisher_source_$.subscribe(observer_$);


// 4
// let observable_publisher_source_$ = new rxjs.Observable(observer => {

//     let number = 1;

//     const handle = setInterval(() => {
//         observer.next(number++);
//         if (number > 3) {
//             clearInterval(handle);
//             observer.complete();
//         }
//     }, 1000);

// });

// // 一个观察者，处理器
// let observer_$ = {
//     next: ele => {
//         console.log(ele);
//     },
//     complete: () => {
//         console.log(`No more ele`);
//     }
// };

// // 订阅，组装
// observable_publisher_source_$.subscribe(observer_$);

// 5
// let observable_publisher_source_$ = new rxjs.Observable(observer => {

//     let number = 1;

//     // 强行试错
//     observer.error("我错了");

//     const handle = setInterval(() => {



//         observer.next(number);
//         console.info("info", number);

//         number++;
//         if (number > 3) {
//             clearInterval(handle);
//             console.info("info", "over")
//             observer.complete();
//         }
//     }, 1000);

// });

// // 一个观察者，处理器
// let observer_$ = {
//     next: ele => {
//         console.log(ele);
//     },
//     error: error => {
//         console.log(error);
//     },
//     complete: () => {
//         console.log(`No more ele`);
//     }
// };

// // 订阅，组装
// observable_publisher_source_$.subscribe(observer_$);


// 6
// let observable_publisher_source_$ = new rxjs.Observable(observer => {

//     let number = 1;

//     // 强行试错
//     observer.error("我错了");

//     const handle = setInterval(() => {



//         observer.next(number);
//         console.info("info", number);

//         number++;
//         if (number > 3) {
//             clearInterval(handle);
//             console.info("info", "over")
//             observer.complete();
//         }
//     }, 1000);

// });

// // 一个观察者，处理器
// let observer_$ = {
//     next: ele => {
//         console.log(ele);
//     },
//     error: error => {
//         console.log(error);
//     },
//     complete: () => {
//         console.log(`No more ele`);
//     }
// };

// // 订阅，组装
// observable_publisher_source_$.subscribe(observer_$);

// 7
// let observable_publisher_source_$ = new rxjs.Observable(observer => {
//     let number = 1;

//     const handle = setInterval(() => {
//         observer.next(number);
//         console.info("info", number);
//         number++;
//     }, 1000);

//     return {
//         unsubscribe: () => {
//             // clearInterval(handle);
//         }
//     }

// });
// // 一个观察者，处理器
// let observer_$ = {
//     next: ele => {
//         console.log(ele);
//     },
//     error: error => {
//         console.log(error);
//     },
//     complete: () => {
//         console.log(`No more ele`);
//     }
// };

// // 订阅，组装
// let subscription = observable_publisher_source_$.subscribe(observer_$);

// // 取消订阅
// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3500);