
import { rolesModel } from "../models/roles.model.js";

export const obtenerTodosLosRoles = async (req, res) => {
    try{
        const RolesObtenidos = await rolesModel.findAll()
        return res.status(200).json(RolesObtenidos)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor"})
    }
}
export const ObtenerRolPorId = async (req, res) => {
    try {
        const {id} = req.params;
        const RolEncontrado = await rolesModel.findByPk(id)
        if (!RolEncontrado) {
            return res.status(404).json({
                message: "Rol no encontrado"
            })
        }
        return res.status(200).json(RolEncontrado)
    }
    catch {
        res.status(404).json({
            message: "Error en el servidor"
        })
    }
}
export const crearRol = async (req, res) => {
    try {
        const{name} = req.body;
        const NombreBuscado = await rolesModel.findOne({
            where: {name}
        })
        if(NombreBuscado){
            return res.status(400).json({
                message: "El nombre ya existe"
            })
        }
        await rolesModel.create({
            name
        })
        return res.status(201).json({
            message: "Rol creado con exito"
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en el servidor"
        })
    }
}
