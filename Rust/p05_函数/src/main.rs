
fn plus_one(i: i32) -> i32 {
    i + 1
}


fn main() {
    // println!("Hello, world!");//这玩意是一个宏
    // log_number(123);
    // print_sum(5, 6);
    // println!("加一{}",add_one(3) );

    // 函数指针
    // 没有使用类型推导
    // let f: fn(i32) -> i32 = plus_one;
    // 使用类型推导
    // let f = plus_one;
    // let six = f(5);
    // println!("加一{}",six)
}

fn log_number(x: i32) {
    println!("The number is {}", x);
}

fn print_sum(x: i32, y: i32) {
    println!("sum is: {}", x + y);
}

// 函数后面箭头引出返回值类型
// 表达式返回一个值，而语句不是
// Rust 中有两种类型的语句：
// “声明语句”和“表达式语句”。
// 其余的一切是表达式。
// 特别注意的是赋值的返回值是一个空的元组，所以不能连赋值
fn add_one(x: i32) -> i32 {
    x + 1
}

// 提早返回用return

// 发散函数不理解用来干什么
