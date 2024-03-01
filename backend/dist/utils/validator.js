import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            // if (!result.isEmpty()) {
            //     //there is some error 
            //     break;
            // }
        }
        //gives you final result of validations 
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
const loginValidator = [
    body("email").trim().isEmail().withMessage("Enter a valid email"),
    body("password").trim().isLength({ min: 6 }).withMessage("password should be at least 6 characters"),
];
const signupValidator = [
    body("name").notEmpty().withMessage("Name is requied"),
    ...loginValidator,
];
const chatValidator = [
    body("message").notEmpty().withMessage("Message is requied"),
];
export { validate, signupValidator, loginValidator, chatValidator };
//# sourceMappingURL=validator.js.map