注意，这里是用了Cargo，它相当于Nodejs里的npm,yarn,cnpm.
源文件应该放置到/src文件夹，并配置一个Cargo.toml，注意首目大写，相当于node里面的package.json文件
cargo build //构建项目
cargo run //运行项目，若未构建，则构建并运行
下一节，将直接使用cargo new 项目名称新建空白项目