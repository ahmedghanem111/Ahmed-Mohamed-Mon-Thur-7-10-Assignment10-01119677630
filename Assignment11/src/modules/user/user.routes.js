import { Router } from "express";
import auth from "../../middleware/auth.middleware.js";
import authorization from "../../middleware/authorization.middleware.js";
import { deleteUser } from "./user.controller.js";

const router = Router();

router.delete("/:id", auth, authorization("admin"), deleteUser);

export default router;