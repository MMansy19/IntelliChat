import express from "express";
import { verify_token } from "../controllers/user.controller.js";
import { generateChatCompeltion } from "../controllers/chat.controller.js";
import { chatValidator, validate } from "../utils/validator.js";
const router = express.Router();
router.post("/new", validate(chatValidator), verify_token, generateChatCompeltion);
export default router;
//# sourceMappingURL=chat.route.js.map