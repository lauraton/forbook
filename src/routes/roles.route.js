import express from "express"
import {
    crearRol
} from "../controllers/roles.controller.js"

import { validate, CrearRolvalidations } from "../middlewares/validations/roles.validation.js"

export const rolesRouter = express.Router();

rolesRouter.post("/roles", CrearRolvalidations, validate, crearRol)

