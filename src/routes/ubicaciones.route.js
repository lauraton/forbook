import express from "express"
import {
    crearUbicacion,
    ObtenerUbicacionPorId,
    obtenerTodasLasUbicaciones
} from "../controllers/ubicaciones.controller.js"

import { validate, CrearUbicacionvalidations } from "../middlewares/validations/ubicaciones.validation.js"

export const UbicacionRouter = express.Router();

UbicacionRouter.post("/ubicaciones", CrearUbicacionvalidations, validate, crearUbicacion)
UbicacionRouter.get("/ubicaciones", obtenerTodasLasUbicaciones);
UbicacionRouter.get("/ubicaciones/id", ObtenerUbicacionPorId);
