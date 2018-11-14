var mongoDB=require("mongodb");
var mongoClient=mongoDB.MongoClient;

var host="mongodb://127.0.0.1:27017"
var dbName="pinza";

//连接数据库
mongoClient.connect(host,function(err,client){
    if (err) {
        throw err;
    }
    console.log("成功连接到数据库引擎");
    
    var db=client.db(dbName);
    var collection=db.collection("it");
    collection.find({}).toArray((err,docs)=>{
        if (err) {
            throw err;
        }
        console.log(docs);
    })
    client.close();
});
