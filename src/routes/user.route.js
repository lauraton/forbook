import { Router } from "express";
import { userValidation } from "../middlewares/validations/user.validation.js";
import { validate } from "../middlewares/validate.js";
import { createUser } from "../controllers/user.controller.js";





export const userRouter = Router()

userRouter.post("/users", userValidation, validate, createUser);