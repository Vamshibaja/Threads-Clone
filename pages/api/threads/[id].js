import { Thread } from "@/db/models/thread";
import connectToDb from "@/db/connectToDb";

connectToDb();

export default async function handler(req,res) {
    const { method, query: { id } } = req;
    const body=req.body;
    switch(method){
        case "GET":
            try {
                    let thredsData=await Thread.findById(id);
                    if(!thredsData){
                        return res.json({msg:"Error finding Id"});
                    }
                    res.json({success:true})
            } catch (error) {
                console.log("Error ->",error)
                res.json({success:false});
            }
            break;
        case "PUT":
            try {
                if(body.type==="addLike"){
                    const thredsData=await Thread.findByIdAndUpdate(body.id,{
                        $inc:{likes:1}}, {new:true}
                    );
                    if(!thredsData)
                        return res.json({success:false,data:thredsData,msg:"Thread not found"});
                    res.status(200).json({ success: true, data: thredsData });
                }
                else{ 
                    const thredsData=await Thread.findByIdAndUpdate(id,req.body,{
                        new:true,
                        runValidators:true
                    });
                    if(!thredsData){
                        return res.json({success:false,msg:"thread not found"})
                    }
                    res.json({success:true,data:thredsData});
                }
            } catch (error) {
                console.log("Error -->",error);
                res.json({success:false,msg:"Error in catch "+error})
            }
            break;
        case "DELETE":
            try {
                // if(body.type="deletePost"){
                //     const thredsData=await Thread.deleteOne({_id:body.id});
                //     if(!deleteThread){
                //         return res.json({success:false,msg:"Cant delete post"});
                //     }
                //     res.json({success:true,msg:"Deleted post"});
                // }
                // else{
                    let deleteThread=await Thread.deleteOne({_id:id})
                    if(!deleteThread){
                        return res.json({success:false});
                    }
                    res.json({success:true,data:{}});
            } catch (error) {
                console.log("Error=> ",error);
            }
            break;
        default:
            res.json({msg:"No proper Method"})
            break;
    }
    
}