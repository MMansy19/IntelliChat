import { OpenAIApi } from "openai";
import User from "../models/User.model.js";
import { configureOpenAI } from "../config/openai.cofig.js";
export const generateChatCompeltion = async (req, res, next) => {
    try {
        const { message } = req.body;
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({
                message: "User not registered or Token malfunctioned",
            });
        }
        const chats = user.chats.map(({ role, content }) => {
            //desctruction assingment
            return { role, content };
        });
        chats.push({ content: message, role: "user" });
        const config = configureOpenAI();
        const openai = new OpenAIApi(config);
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
            //it excutes the last element in this chats array
        });
        user.chats.push({ content: message, role: "user" });
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "Something went wrong" });
    }
};
export const get_all_chat = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({
                message: "User not registered or Token malfunctioned",
            });
        }
        return res.status(200).json({ message: "OK", chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const delete_chat = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({
                message: "User not registered or Token malfunctioned",
            });
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res.status(200).json({ message: "OK" });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=chat.controller.js.map