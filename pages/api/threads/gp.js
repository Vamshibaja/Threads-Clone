import { Thread } from "@/db/models/thread";
import connectToDb from "@/db/connectToDb";

//connect to db
connectToDb();

export default async function handler(req,res){
    const method=req.method;
    console.log("threads.js route to method", method)
    switch(method){
        case "GET":
            try {
                const thredsData=await Thread.find({});
                res.status(200).json({success:true,data:thredsData})
            } catch (error) {
                console.log("Error ",error)
                res.json({msg:"Error"})
            }
            break;
        case "POST":
            try {
                const thredsData=await Thread.create(req.body);
                res.status(200).json({success:true,data:thredsData});
            } catch (error) {
                res.json({success:false});
            }
            break;
        default:
            res.json({msg:"In default"});
            break;
    }
}