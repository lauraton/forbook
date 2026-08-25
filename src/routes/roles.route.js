import express from "express"
import {
    crearRol
} from "../controllers/roles.controller.js"

import { validations, validate } from "../middlewares/roles.validation.js"

const router = express.Router();

router.post("/", validations, validate, crearRol)