import { body, validationResult } from "express-validator"
import { SubcategoriasModel } from "../../models/subcategorias.model.js"
import { CategoriasModel } from "../../models/categorias.model.js"

export const CrearSubCategoriavalidations = [
    body("name")
        .notEmpty()
        .withMessage("El nombre no puede estar vacio")
        .isString()
        .withMessage("El nombre debe de ser tipo string")
        .isLength({max: 50})
        .withMessage("El nombre no puede ser mas de 50 caracteres")
        .isLength({min: 2})
        .withMessage("El nombre no puede tener menos de 2 caracteres")
        .custom(async (name) => {
            const roles = await SubcategoriasModel.findOne({where: {name}})

            if(roles){
                throw new Error("Ya existe esta subcategoria")
            }
            return true
        }),
    body("categoria_id")
        .notEmpty()
        .withMessage("La categoria id no puede estar vacio")
        .isInt({min: 1})
        .withMessage("El id tiene que ser mayor o igual a un digito y ser de tipo numero")
        .custom(async (id) => {
            const categoria = await CategoriasModel.findByPk(id)

            if(!categoria){
                throw new Error ("No existe esta categoria")
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