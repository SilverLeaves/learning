var mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/pinza');

const dataSchema = new mongoose.Schema({});
const dataModel = mongoose.model('modelName', dataSchema, 'it');
dataModel.find((err,res)=>{
    if(err){
        throw err;
    }
    console.log(res.toString());
});