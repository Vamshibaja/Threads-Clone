import { Thread } from "@/db/models/thread";
import connectToDb from "@/db/connectToDb";

connectToDb();

export default async function handler(req,res) {
    const { method, query: { id } } = req;
    switch(method){
        case "GET":
            try {
                    let thredsData=await Thread.findById(id);
                    if(!thredsData){
                        return res.json({msg:"Error finding Id"});
                    }
                    res.json({success:true,data:thredsData})
            } catch (error) {
                console.log("Error ->",error)
                res.json({success:false});
            }
            break;
        case "PUT":
            try {
                let thredsData=await Thread.findByIdAndUpdate(id,req.body,{
                    new:true,
                    runValidators:true
                });
                if(!thredsData){
                    return res.json({success:false})
                }
                res.json({success:true,data:thredsData});
            } catch (error) {
                console.log("Error -->",error);
                res.json({success:false})
            }
            break;
        case "DELETE":
            try {
                let deleteThread=await Thread.deleteOne({_id:id})
                if(!deleteThread){
                    return res.json({success:false});
                }
                res.json({success:true,data:deleteThread});
            } catch (error) {
                console.log("Error=> ",error);
            }
            break;
        default:
            res.json({msg:"No proper Method"})
            break;
    }
    
}