import express from "express";
import userRouter from "./user.route.js";
import chatRouter from "./chat.route.js";
const app = express();
app.use("/user", userRouter);
app.use("/chat", chatRouter);
export default app;
//# sourceMappingURL=index.js.map