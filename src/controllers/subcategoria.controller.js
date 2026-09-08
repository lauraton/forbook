
import { CategoriasModel } from "../models/categorias.model.js";
import { SubcategoriasModel } from "../models/subcategorias.model.js";

export const obtenerTodasLasSubCategorias = async (req, res) => {
    try{
        const SubCategoriasObtenidas = await SubcategoriasModel.findAll({include: [{model: CategoriasModel}]})
        return res.status(200).json(SubCategoriasObtenidas)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor"})
    }
}
export const ObtenerSubCategoriaPorId = async (req, res) => {
    try {
        const {id} = req.params;
        const SubCategoriaEncontrada = await SubcategoriasModel.findByPk(id, {include: [{ model: CategoriasModel}]})
        if (!SubCategoriaEncontrada) {
            return res.status(404).json({
                message: "Subcategoria no encontrada"
            })
        }
        return res.status(200).json(SubCategoriaEncontrada)
    }
    catch {
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}
export const crearSubCategoria = async (req, res) => {
    try {
        const{ name, categoria_id } = req.body;
        const NombreBuscado = await SubcategoriasModel.findOne({
            where: {name}
        })
        if(NombreBuscado){
            return res.status(400).json({
                message: "El nombre ya existe"
            })
        }
        
        await SubcategoriasModel.create({
            name,
            categoria_id
        })
        return res.status(201).json({
            message: "Subcategoria creada con exito"
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error en el servidor"
        })
    }
}
