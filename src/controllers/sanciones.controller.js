import { matchedData } from "express-validator";
import { sancionesModel } from "../models/sanciones.model.js";

export const createSancion = async (req, res) => {
    try {
         const validatedData = matchedData(req)
    const created = await sancionesModel.create(validatedData)
    return res.status(201).json({message: "Sanción creada y aplicada correctamente."})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
   
}