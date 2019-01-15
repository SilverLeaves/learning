fn main() {
    const N:i32=5;

    static mut Y: i32 = 5;
    // let (x,y)=(1,2);
    let x=1;
    println!("x: {}",  x);
    unsafe {
        Y += 1;
        println!("Y: {}", Y);
    }
    println!("N: {}", N);

}
