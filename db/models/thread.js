import mongoose from "mongoose";
 const threadSchema = new mongoose.Schema({
    content:{type:String,required:true},
    timestamp:{type:Date,default:Date.now},
    likes:{type:Number,default:0},
    user:{type:String,default:"Vamshi@Baja"}

 })

 const Thread = mongoose.models.Thread || mongoose.model('Thread',threadSchema);
 export {Thread};