import User from "../models/User.model.js";
import bycrpt from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import { config } from "dotenv";
config();
export async function getAllUser(req, res, next) {
    console.log("get all users");
    try {
        const users = await User.find();
        return res.status(200).json({
            message: "OK",
            users,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            message: "ERROR",
            cause: error.message,
        });
    }
}
export async function signup(req, res, next) {
    try {
        const { email, password, name } = req.body;
        const hashedPassword = await bycrpt.hash(password, 10);
        const found_user = await User.findOne({ email });
        if (found_user) {
            return res.status(401).send("user already exists");
        }
        const user = await User.create({ name, email, password: hashedPassword });
        createTokenAndSetCookie(found_user, res);
        return res.status(201).json({
            message: "OK",
            name: found_user.name,
            email: found_user.email,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            message: "ERROR",
            cause: error.message,
        });
    }
}
export async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const found_user = await User.findOne({ email });
        if (!found_user || !(await bycrpt.compare(password, found_user.password))) {
            return res
                .status(401)
                .json("Email not exists or passsword is not correct");
        }
        createTokenAndSetCookie(found_user, res);
        return res.status(200).json({
            message: "OK",
            name: found_user.name,
            email: found_user.email,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            message: "ERROR",
            cause: error.message,
        });
    }
}
export const verify_token = async (req, res, next) => {
    try {
        const token = req.signedCookies[`${COOKIE_NAME}`];
        if (!token || token.trim() === "") {
            return res.status(401).json({
                message: "Token not vaild",
            });
        }
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        res.locals.jwtData = decoded;
        console.log("Token is verified successfully");
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Token expired",
        });
    }
};
export async function verify_user(req, res, next) {
    try {
        const found_user = await User.findById(res.locals.jwtData.id);
        if (!found_user) {
            return res.status(401).json("You should login or resigter first ");
        }
        return res.status(200).json({
            message: "OK",
            id: found_user._id.toString(),
            email: found_user.email,
            name: found_user.name,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            message: "ERROR",
            cuase: error.message,
        });
    }
}
const createTokenAndSetCookie = (user, res) => {
    res.clearCookie(COOKIE_NAME, {
        path: "/",
        //domain: "localhost",
        httpOnly: true,
        signed: true,
    });
    const token = createToken(user._id, user.email, "7d");
    let expires = new Date();
    expires.setDate(expires.getDate() + 7); //getDate () =>for dayes
    res.cookie(COOKIE_NAME, token, {
        path: "/",
        // is the for which the cookie is valid
        //'/' means the entire domain
        // domain: "localhost",
        expiresIn: expires,
        httpOnly: true,
        signed: true,
        /*
            signed indicates that the cookie should be signed using the secret provided by the cookie-parser middleware.
            Signing a cookie adds a cryptographic signature to the cookie data,
            allowing the server to detect if the cookie has been tampered with by a client.
            */
    });
};
export async function logout(req, res, next) {
    try {
        const found_user = await User.findById(res.locals.jwtData.id);
        if (!found_user) {
            return res.status(401).json("You should login or resigter first ");
        }
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            //domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        return res.status(200).json({
            message: "OK",
            id: found_user._id.toString(),
            email: found_user.email,
            name: found_user.name,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            message: "ERROR",
            cuase: error.message,
        });
    }
}
//# sourceMappingURL=user.controller.js.map