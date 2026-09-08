import { matchedData } from "express-validator";
import { User } from "../models/user.model.js";


export const createUser = async (req, res) => {
   try {  
    const validatedData = matchedData(req) 
    const user = await User.create(validatedData)
    return res.status(201).json({
    message: "Usuario creado correctamente",
    user})
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error interno del servidor"})
   }};


export const userUpdate= async (req, res) => {
    try {
        const validatedData = matchedData(req);
        const { id } = req.params;
        const userBuscar = await User.findByPk(id)

        if (!userBuscar) {
         return res.status(404).json({message: "Usuario no encontrado"})
    }

        await User.update(validatedData)
        return res.status(200).json({message: "Usuario actualizado correctamente"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
    
};

export const deleteUser = async (res, req) => {
    try {
        const { id } = req.params;
        const userBuscar = await User.findByPk(id)

        if (!userBuscar) {
            return res.status(404).json({message: "Usuario no encontrado"})
        }

        await userBuscar.destroy()
        return res.status(200).json({message: "Usuario eliminado correctamente"})
    } catch (error) {
        console.log(error) 
        return res.status(500).json({message: "Error interno del servidor"})
    }};


export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
        message: 'Error al obtener los usuarios' 
        });
    }
};
       
export const getUserByID = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User.findByPk(id);
        return res.status(200).json(users);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
        message: 'Error al obtener los usuarios' 
        });
    }
}