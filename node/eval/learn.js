var name="小王",age="17"
const context=this
function fun() {
    
    
    console.log(`this.name:${this.name}; this.age:${this.age}`);
}
var obj={
    objName:"小张",
    objAge:this.age,
    objFun:function(){
        console.log(`this.objName:${this.objName}; this.objAge:${this.objAge}; this.name:${this.name}; this.age:${this.age}`);
    }
}

fun();

obj.objFun()

console.log();
