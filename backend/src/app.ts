import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'https://intellichat-mern.netlify.app');
//     // You can also specify multiple origins by separating them with commas
//     // res.setHeader('Access-Control-Allow-Origin', 'https://intellichat-mern.netlify.app, http://localhost:5173');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
//   });
//middlewares
app.use(
  cors({ origin: "https://intellichat-mern.netlify.app", credentials: true })
);

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//process.env.COOKIE_SECRET
//remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
