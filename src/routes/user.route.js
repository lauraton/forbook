import { Route } from "sequelize";
import { userValidation } from "../middlewares/validations/user.validation";
import { validate } from "../middlewares/validate";
import { createUser } from "../controllers/user.controller";





export const userRouter = Route()

userRouter.post("/users", userValidation, validate, createUser);