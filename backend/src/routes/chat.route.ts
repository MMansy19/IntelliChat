import express from "express";
import { verify_token } from "../controllers/user.controller.js";
import {generateChatCompeltion,get_all_chat,delete_chat} from "../controllers/chat.controller.js"
import { chatValidator, validate } from "../utils/validator.js";
const router = express.Router();
router.post("/new",validate(chatValidator),verify_token,generateChatCompeltion)
router.get("/all-chats",verify_token,get_all_chat)
router.delete("/delete",verify_token,delete_chat)
export default router;  