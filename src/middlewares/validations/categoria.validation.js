import { body, validationResult } from "express-validator"
import { CategoriasModel } from "../../models/categorias.model.js"

export const CrearCategoriavalidations = [
    body("name")
        .notEmpty()
        .withMessage("El nombre no puede estar vacio")
        .isString()
        .withMessage("El nombre debe de ser tipo string")
        .isLength({max: 20})
        .withMessage("El nombre no puede ser mas de 20 caracteres")
        .isLength({min: 2})
        .withMessage("El nombre no puede tener menos de 2 caracteres")
        .custom(async (name) => {
            const roles = await CategoriasModel.findOne({where: {name}})

            if(roles){
                throw new Error("Ya existe esta categoria")
            }
            return true
        })
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