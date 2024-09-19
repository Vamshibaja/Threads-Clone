import mongoose from "mongoose";

const connectToDb = async()=>{
    try {
        if(mongoose.connection.readyState===0){
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("Db connected")
        }
    } catch (error) {
        console.log("Error connecting to db");
    }
}
export default connectToDb;