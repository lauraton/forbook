import { body, param } from "express-validator";
import { User } from "../../models/user.model.js";

export const userValidation = [
    body("name")
        .notEmpty()
        .withMessage("Se debe de ingresar un nombre.")
        .isString()
        .withMessage("El name debe de ser un string")
        .isLength({ max: 100 })
        .withMessage("El name no puede superar los 100 caracteres"),
    body("surname")
        .notEmpty()
        .withMessage("Se debe ingresar un surname")
        .isString()
        .withMessage("El surname debe de ser un string")
        .isLength({ max: 100 }),
    body("email")
        .notEmpty()
        .withMessage("El email no puede estar vacío")
        .isString()
        .withMessage("El email debe de ser un string")
        .isEmail()
        .withMessage("El email debe de ser un email válido")
        .custom(async (email) => {
            const existingMail = await User.findOne({
                 where: { email }
            });

            if (existingMail) {
                throw new Error("El email ya está registrado")
            }

            return true;
        }),

    body("password")
        .notEmpty()
        .withMessage("El password no puede estar vacío")
        .isString()
        .withMessage("El password debe de ser un string")
        .isLength({max: 100})
        .withMessage("El password no puede superar los 100 caracteres"),

    body("phone")
        .optional()
        .isInt()
        .withMessage("El phone debe de estar formado por números reales")
        .isLength({max: 14})
        .withMessage("El phone no debe superar los 14 caracteres")
    
]