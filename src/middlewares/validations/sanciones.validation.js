import { body, param } from "express-validator"
import { sancionesModel } from "../../models/sanciones.model.js"

export const sancionesCreateValidation = [
    body("user_id")
        .notEmpty()
        .withMessage("user_id no puede estar vacío")
        .isInt({min: 1})
        .withMessage("user_id debe ser un número entero"),
    body("type")
        .notEmpty()
        .withMessage("type no puede estar vacío")
        .isIn(['advertencia', 'suspension_temporal', 'baneo_definitivo', 'muteo'])
        .withMessage("Tipo de sanción no válido"),
    body("motive")
        .notEmpty()
        .withMessage("motive no puede estar vacío")
        .isString()
        .withMessage("motive debe ser un string"),
    body("active")
        .notEmpty()
        .withMessage("active no puede estar vacío")
        .isBoolean()
        .withMessage("active debe ser de valor booleano")

]