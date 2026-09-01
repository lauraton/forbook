import { body, validationResult } from "express-validator";

export const profileValidationRules = [
  body("user_id")
    .notEmpty()
    .withMessage("El id del usuario es obligatorio")
    .isInt()
    .withMessage("El id del usuario debe ser un número entero"),

  body("bio")
    .optional()
    .isLength({ max: 255 })
    .withMessage("La biografía no puede superar los 255 caracteres"),

  body("avatarUrl")
    .optional()
    .isURL()
    .withMessage("El avatar debe ser una URL válida"),

  body("location")
    .optional()
    .isLength({ max: 100 })
    .withMessage("La ubicación no puede superar los 100 caracteres"),

  body("birthdate")
    .optional()
    .isISO8601()
    .withMessage("La fecha de nacimiento debe tener un formato de fecha válido (AAAA-MM-DD)"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];