import mongoose from "mongoose";
import { config } from "dotenv"
config();
async function connectToDB() {
    try {
        await mongoose.connect(process.env.connect_db)
        console.log("connected successfully to database");
    } catch (error) {
        console.log("error in connecting to database");
        console.log(error)
    }
}
  
async function disconnectToDB(){  
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log("error in disconnecting to database")
    } 
}

export { connectToDB, disconnectToDB }
