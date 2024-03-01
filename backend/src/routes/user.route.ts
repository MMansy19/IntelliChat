import express from "express";
import {
  getAllUser,
  login,
  logout,
  signup,
  verify_token,
  verify_user,
} from "../controllers/user.controller.js";
import {
  validate,
  signupValidator,
  loginValidator,
} from "../utils/validator.js";
import { verifyToken } from "../utils/token-manager.js";
const router = express.Router();
router.get("/", getAllUser);
router.post("/signup", validate(signupValidator), signup);
router.post("/login", validate(loginValidator), login);
router.get("/auth-status", verify_token, verify_user);
router.get("/logout", verify_token, logout);
export default router;
