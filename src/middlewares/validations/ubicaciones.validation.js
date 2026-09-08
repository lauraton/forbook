import { body, validationResult } from "express-validator"
import { UbicacionesModel } from "../../models/ubicaciones.model.js"

export const CrearUbicacionvalidations = [
    body("name")
        .notEmpty()
        .withMessage("El nombre no puede estar vacio")
        .isString()
        .withMessage("El nombre debe de ser tipo string")
        .isLength({max: 80})
        .withMessage("El nombre no puede ser mas de 80 caracteres")
        .isLength({min: 5})
        .withMessage("El nombre no puede tener menos de 5 caracteres")
        .custom(async (name) => {
            const ubicaciones = await UbicacionesModel.findOne({where: {name}})

            if(ubicaciones){
                throw new Error("Ya existe esta ubicacion")
            }
            return true
        }),
        body("latitud")
            .notEmpty()
            .withMessage("La latitud no puede estar vacia")
            .isFloat()
            .withMessage("La latitud tiene que ser un numero decimal "),
        body("longitud")
            .notEmpty()
            .withMessage("La longitud no puede estar vacia")
            .isFloat()
            .withMessage("La longitud tiene que ser un numero decimal "),
        body("categoria_id")
            .notEmpty()
            .withMessage("La categoria no puede estar vacia")
            .isInt({min: 1})
            .withMessage("El id de categoria debe de ser de un digito y ser de tipo numero"),
        body("subcategoria_id")
            .notEmpty()
            .withMessage("La id de subcategoria no puede estar vacia")
            .isInt({min: 1})
            .withMessage("El id de subcategoria debe de ser de un digito y ser de tipo numero")
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