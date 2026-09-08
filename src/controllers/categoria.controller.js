
import { CategoriasModel } from "../models/categorias.model.js";

export const obtenerTodasLasCategorias = async (req, res) => {
    try{
        const CategoriasObtenidas = await CategoriasModel.findAll()
        return res.status(200).json(CategoriasObtenidas)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor"})
    }
}
export const ObtenerCategoriaPorId = async (req, res) => {
    try {
        const {id} = req.params;
        const CategoriaEncontrada = await CategoriasModel.findByPk(id)
        if (!CategoriaEncontrada) {
            return res.status(404).json({
                message: "Categoria no encontrada"
            })
        }
        return res.status(200).json(CategoriaEncontrada)
    }
    catch {
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}
export const crearCategoria = async (req, res) => {
    try {
        const{name} = req.body;
        const NombreBuscado = await CategoriasModel.findOne({
            where: {name}
        })
        if(NombreBuscado){
            return res.status(400).json({
                message: "El nombre ya existe"
            })
        }
        
        await CategoriasModel.create({
            name
        })
        return res.status(201).json({
            message: "Categoria creada con exito"
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en el servidor"
        })
    }
}
