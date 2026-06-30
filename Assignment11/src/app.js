import express from "express";
import authRouter from "./modules/auth/auth.routes.js";
import messageRouter from "./modules/message/message.routes.js";
import dbConnection from "./config/db.js";
import userRouter from "./modules/user/user.routes.js";

const app = express();

await dbConnection();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/message", messageRouter);
app.use("/user", userRouter);

export default app;