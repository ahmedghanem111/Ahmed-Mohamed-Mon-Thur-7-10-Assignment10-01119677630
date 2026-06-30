import { Router } from "express";
import { register, login } from "./auth.controller.js";
import validation from "../../middleware/validation.middleware.js";
import auth from "../../middleware/auth.middleware.js";
import { registerSchema } from "./auth.validation.js";
import { googleLogin } from "./auth.controller.js";


const router = Router();

router.post("/register", validation(registerSchema), register);
router.post("/login", login);
router.post("/google", googleLogin);

export default router;