import express from "express"
import {
    crearCategoria,
} from "../controllers/categoria.controller.js"

import { validate, CrearCategoriavalidations } from "../middlewares/validations/categoria.validation.js"

export const categoriaRouter = express.Router();

categoriaRouter.post("/categorias", CrearCategoriavalidations, validate, crearCategoria)

