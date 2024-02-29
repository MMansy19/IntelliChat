import User from "../models/User.model.js";
import bycrpt from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
export async function getAllUser(req, res, next) {
    console.log("get all users");
    try {
        const users = await User.find();
        return res.status(200).json({
            message: "OK",
            data: {
                users
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "ERROR",
            // message: error.message
        });
    }
}
export async function signup(req, res, next) {
    try {
        const { email, password, name } = req.body;
        const hashedPassword = await bycrpt.hash(password, 10);
        const found_user = await User.findOne({ email });
        if (found_user) {
            return res.status(401).json("user already exists");
        }
        const user = await User.create({ name, email, password: hashedPassword });
        createTokenAndSetCookie(user, res);
        return res.status(201).json({
            message: "OK",  
            id: user._id.toString(),
            token

        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "ERROR",
            data: null
        });
    }
}
export async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const found_user = await User.findOne({ email });
        if (!found_user || !(await bycrpt.compare(password, found_user.password))) {
            return res.status(401).json("Email not exists or passsword is not correct");
        }
        const token=createTokenAndSetCookie(found_user, res);
        return res.status(201).json({
            message: "OK",
            id: found_user._id.toString(),
            token
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "ERROR",
        });
    }
}
const createTokenAndSetCookie = (user, res) => {
    res.clearCookie(COOKIE_NAME, {
        path: '/',
        domain: "localhost",
        httpOnly: true,
        signed: true
    });
    const token = createToken(user._id, user.email, "7d");
    let expires = new Date();
    expires.setDate(expires.getDate() + 7); //getDate () =>for dayes
    res.cookie(COOKIE_NAME, token, {
        path: '/',
        // is the for which the cookie is valid
        //'/' means the entire domain
        // domain: "localhost",
        expiresIn: expires,
        httpOnly: true,
        signed: true
        /*
        signed indicates that the cookie should be signed using the secret provided by the cookie-parser middleware.
        Signing a cookie adds a cryptographic signature to the cookie data,
        allowing the server to detect if the cookie has been tampered with by a client.
        */
    });
    return token;
};
//# sourceMappingURL=user.controller.js.map