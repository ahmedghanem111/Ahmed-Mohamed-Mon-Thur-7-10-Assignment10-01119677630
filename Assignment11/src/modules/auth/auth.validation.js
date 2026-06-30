import Joi from "joi";

export const registerSchema = Joi.object({
  userName: Joi.string().min(3).max(20).required(),

  email: Joi.string().email().required(),

  password: Joi.string().min(6).max(20).required(),
});