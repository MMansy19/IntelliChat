import express from "express";
import { getAllUser,login,signup } from "../controllers/user.controller.js";
import {validate,  signupValidator, loginValidator } from "../utils/validator.js";
const router = express.Router();
router.get('/',getAllUser)
router.post('/signup',validate(signupValidator),signup)
router.post('/login',validate(loginValidator),login)
export default router;