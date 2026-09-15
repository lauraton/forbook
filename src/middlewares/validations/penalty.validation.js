import { body } from "express-validator"
import { User } from "../../models/user.model.js"

export const sancionesCreateValidation = [
    body("user_id")
        .notEmpty()
        .withMessage("user_id no puede estar vacío")
        .isInt({min: 1})
        .withMessage("user_id debe ser un número entero")
        .custom(async (user_id) => {
            const user = await User.findByPk(user_id)
            if (!user) {
                throw new Error("user_id no existe")
            }
            return true
        }),
    body("type")
        .notEmpty()
        .withMessage("type no puede estar vacío")
        .isIn(['advertencia', 'suspension_temporal', 'baneo_definitivo', 'muteo'])
        .withMessage("type de sanción no válido"),
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

export const updateSancionesValidation = [
    
    body("user_id")
        .optional()
        .notEmpty()
        .withMessage("user_id no puede estar vacío")
        .isInt({min: 1})
        .withMessage("user_id debe ser un número entero"),
    body("type")
        .optional()
        .notEmpty()
        .withMessage("type no puede estar vacío")
        .isIn(['advertencia', 'suspension_temporal', 'baneo_definitivo', 'muteo'])
        .withMessage("Tipo de sanción no válido"),
    body("motive")
        .optional()
        .notEmpty()
        .withMessage("motive no puede estar vacío")
        .isString()
        .withMessage("motive debe ser un string"),
    body("active")
        .optional()
        .notEmpty()
        .withMessage("active no puede estar vacío")
        .isBoolean()
        .withMessage("active debe ser de valor booleano")

]