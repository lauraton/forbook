import { User } from "../models/user.model.js";


export const createUser = async (req, res) => {
   try {
    const { name, surname, email, password, phone } = req.body;
    
    const user = await User.create({
    name,
    surname,
    email,
    password,
    phone
})

return res.status(201).json({
    message: "Usuario creado correctamente",
    user
});
   } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Error interno del servidor"})
   }};