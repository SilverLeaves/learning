fn main() {
    // let (x, y) = (1, 2);
    // let z: i32 = 5;
    // z=8;//这是不可更改的变量，不会通过编译。

    // let a: i32; //无害不罚，只声明不赋值，可以的
    // println!("Hello, world! xis {}", a);//，但是若用了，就不会编译

    // {}为作用域
    // let x: i32 = 17;
    // {
    //     let y: i32 = 3;
    //     println!("The value of x is {} and value of y is {}", x, y);
    // }
    // println!("The value of x is {} and value of y is {}", x, y); // This won't work.

    // 隐藏和可变是不一样的，以下是隐藏，而不是可变
    // 可变不需要重新声明，而隐藏需要
    // let x: i32 = 8;
    // {
    //     println!("{}", x); // Prints "8".
    //     let x = 12;
    //     println!("{}", x); // Prints "12".
    // }
    // println!("{}", x); // Prints "8".
    // let x = 42;
    // println!("{}", x); // Prints "42".
}
