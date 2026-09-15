import { Router} from "express"
import { sancionesCreateValidation, updateSancionesValidation } from "../middlewares/validations/penalty.validation.js"
import { validate } from "../middlewares/validate.js"
import { createPenalty, updatePenalty } from "../controllers/penalty.controller.js"


export const penaltyRouter = Router()

penaltyRouter.post("/penalty", sancionesCreateValidation, validate, createPenalty)
penaltyRouter.put("/penalty/:id", updateSancionesValidation, validate, updatePenalty)