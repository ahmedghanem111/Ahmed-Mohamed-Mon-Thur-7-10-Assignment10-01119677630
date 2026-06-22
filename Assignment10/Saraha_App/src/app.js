import express from "express";
import authRouter from "./modules/auth/auth.routes.js";
import messageRouter from "./modules/message/message.routes.js";
import dbConnection from "./config/db.js";

const app = express();

await dbConnection();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/message", messageRouter);

export default app;