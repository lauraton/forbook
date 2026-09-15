import { matchedData } from "express-validator";
import { penalties } from "../models/penalty.model.js";

export const createPenalty = async (req, res) => {
    try {
        const validatedData = matchedData(req)
        const penalty = await penalties.create(validatedData)
    return res.status(201).json({message: "Sanción creada y aplicada correctamente.", penalty})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
   
}

export const updatePenalty = async (req, res) => {
    try {
        const { id } = req.params
        const validatedData = matchedData(req);
        const sancion = await penalties.findByPk(id)

        if (!sancion) {
            throw new Error({message: "Esa sanción no existe"})
        }
        
        await sancion.update(validatedData)
        return res.status(200).json({message: "Sanción actualizada con éxito", sancion})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error interno del servidor"})
    }
}