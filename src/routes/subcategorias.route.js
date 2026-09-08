import express from "express"
import {
    crearSubCategoria,
} from "../controllers/subcategoria.controller.js"

import { validate, CrearSubCategoriavalidations } from "../middlewares/validations/subcategoria.validation.js"

export const subcategoriaRouter = express.Router();

subcategoriaRouter.post("/subcategorias", CrearSubCategoriavalidations, validate, crearSubCategoria)

