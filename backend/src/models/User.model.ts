import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatShema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID()
    },
    role: {
        type: String,
        required:true,
    },
    content: {
        type: String,
        required:true,
     },
})
const userShcema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    chats: [ chatShema ]
})

export default mongoose.model("User", userShcema);