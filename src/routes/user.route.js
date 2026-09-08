import { Router } from "express";
import { userCreateValidation, userIdValidation, userUpdateValidation } from "../middlewares/validations/user.validation.js";
import { validate } from "../middlewares/validate.js";
import { createUser, deleteUser, getUserByID, getUsers, userUpdate } from "../controllers/user.controller.js";





export const userRouter = Router()

userRouter.post("/users", userCreateValidation, validate, createUser);
userRouter.put("/users/:id", userIdValidation, userUpdateValidation, validate, userUpdate)
userRouter.delete("/users/:id", userIdValidation, validate, deleteUser)
userRouter.get("/users/:id", userIdValidation, validate, getUserByID)
userRouter.get("/users", getUsers)