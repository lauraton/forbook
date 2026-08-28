import express from "express"
import {
    crearRol
} from "../controllers/roles.controller.js"

import { validate, CrearRolvalidations } from "../middlewares/roles.validation.js"

const router = express.Router();

router.post("/", CrearRolvalidations, validate, crearRol)

export default router