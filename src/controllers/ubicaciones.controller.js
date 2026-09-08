
import { CategoriasModel } from "../models/categorias.model.js";
import { SubcategoriasModel } from "../models/subcategorias.model.js";
import { UbicacionesModel } from "../models/ubicaciones.model.js";

export const obtenerTodasLasUbicaciones = async (req, res) => {
    try{
        const UbicacionesObtenidos = await UbicacionesModel.findAll({include: [{ model: CategoriasModel}, {model: SubcategoriasModel}]})
        return res.status(200).json(UbicacionesObtenidos)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor"})
    }
}
export const ObtenerUbicacionPorId = async (req, res) => {
    try {
        const {id} = req.params;
        const UbicacionEncontrada = await UbicacionesModel.findByPk(id, {include: [{model: CategoriasModel}, {model: SubcategoriasModel}]})
        if (!UbicacionEncontrada) {
            return res.status(404).json({
                message: "Ubicacion no encontrada"
            })
        }
        return res.status(200).json(UbicacionEncontrada)
    }
    catch {
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}
export const crearUbicacion = async (req, res) => {
    try {
        const{name, latitud, longitud, categoria_id, subcategoria_id} = req.body;
        const NombreBuscado = await UbicacionesModel.findOne({
            where: {name},
        })
        if(NombreBuscado){
            return res.status(400).json({
                message: "El nombre ya existe"
            })
        }
        
        await UbicacionesModel.create({
            name,
            latitud,
            longitud,
            categoria_id,
            subcategoria_id
        })
        return res.status(201).json({
            message: "Ubicacion creada con exito"
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en el servidor"
        })
    }
}
