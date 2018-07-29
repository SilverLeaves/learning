//太痛苦了
var riji=(value)=>{
    console.log(value)
}

var thing1=(todo)=>{
    console.log("做饭");
    var value="饭";
    setTimeout(()=>{
        todo(value);
    },1500);
}
var thing2=(todo)=>{
    console.log("吃饭");
    var value="困";
    setTimeout(()=>{
        todo(value);
    },1500);
}
var thing3=(todo)=>{
    console.log("睡觉");
    var value="精神";
    setTimeout(()=>{
        todo(value);
    },1500);
}

class Promise{
    constructor(todo){
        var doneList=[];

        this.status="pending";
        this.data=undefined;

        this.then=(done)=>{
            doneList.push(done);
        }
        this.run=()=>{
            setTimeout(()=>{
                todo(done);
            },0);
        }

        var done=(value)=>{
            if(this.status==="pending"){
                this.data=value;
                while(1){
                    if(doneList.length===0){
                        this.status==="done";
                        return this.data;
                    }
                    else{
                        var next=doneList.shift();
                        next(this.data);
                    }
                }
                
            }
        }
        
    }
}




var doThing=()=>{
    console.log("起床了");
    var test=new Promise(thing1);
    test.then(riji);
    test.then(riji);
    test.then(riji);
    test.then(riji);

    test.run();
    console.log("你今天自己做饭吃饭完了没事就睡觉吧！");
}

doThing();