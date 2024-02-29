import User from "../models/User.model.js"
import bycrpt from "bcrypt"
export async function getAllUser(req, res, next) {
    console.log("get all users")
    try {
        const users = await User.find();
        return res.status(200).json({
            message: "OK",
            data: {
                users
            }
            
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "ERROR",
           // message: error.message
            
        })
    }
}

export async function signup(req, res, next) {
    try {
        console.log(req.body)
        const { email, password, name } = req.body; 
        const hashedPassword = await bycrpt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword })
        res.status(201).json({
            message: "OK",
            data: {
                user
            },
            id:user._id.toString()
        }) 
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "ERROR",
            data: null
            
        }) 
    }
    
}