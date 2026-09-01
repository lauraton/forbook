import { ProfileModel as Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";

export const createProfile = async (req, res) => {
  try {
    const { bio, avatarUrl, location, birthdate, user_id } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: "El usuario especificado no existe" });
    }

    const existingProfile = await Profile.findOne({ where: { user_id } });
    if (existingProfile) {
      return res.status(400).json({ message: "Este usuario ya tiene un perfil asociado" });
    }

    const profile = await Profile.create({
      bio,
      avatarUrl,
      location,
      birthdate,
      user_id,
    });

    return res.status(201).json({
      message: "Perfil creado correctamente",
      profile,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear el perfil",
      error: error.message,
    });
  }
};

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
      ],
    });

    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener los perfiles",
      error: error.message,
    });
  }
};