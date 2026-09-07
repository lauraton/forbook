import express from "express"
import {
    crearUbicacion
} from "../controllers/ubicaciones.controller.js"

import { validate, CrearUbicacionvalidations } from "../middlewares/ubicaciones.validation.js"

export const UbicacionRouter = express.Router();

UbicacionRouter.post("/ubicaciones", CrearUbicacionvalidations, validate, crearUbicacion)

