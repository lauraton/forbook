import { body, validationResult } from "express-validator"

export const validations = [
    body("name")
    .notEmpty()
    .withMessage("El nombre no puede estar vacio")
    .isString
    .withMessage("El nombre debe de ser tipo string")
    .isLength({max: 20})
    .withMessage("El nombre no puede ser mas de 20 caracteres")
    .isLength({min: 5})
    .withMessage("El nombre no puede tener menos de 5 caracteres")
]

export const validate = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
    next()
}